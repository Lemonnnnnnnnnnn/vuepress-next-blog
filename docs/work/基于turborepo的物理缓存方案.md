---
title: "基于turborepo的物理缓存方案"
---

提高打包/编译速度有两个主要的思考方向：
- 首选方案是选择更快的现代转译器，如 [esbuild](https://esbuild.github.io/) 或 [swc](https://swc.rs/)
- 但当项目体量庞大起来后，使用现代转译器已经无法显著提高打包速度时，则可以考虑使用物理缓存。

## 物理缓存的痛点

#### 一、当你不明确哪些依赖会让项目物理缓存失效时，很容易产生构建缓存不失效，导致产物是旧的问题，极大影响研发效率。

为了避免上述情况的发生，一个合理的缓存策略是必要的，以下介绍一种有效的缓存策略：

每次打包前会先基于当前环境生成**哈希值**，当前环境包括但不限于：
- 指定/所有 **打包前** 文件的内容/大小/创建时间/更新时间（input）
- 环境变量
- 依赖文件，如 `packagejson`
- 打包后文件的内容
- 打包日志
- ...

首次打包一定是无缓存的，此时将打包后的产物缓存一份到指定位置，如 `node_modules/.cache/[哈希值].tar` 

第二次打包时如果哈希值和首次一致，则可以直接使用上一次缓存的结果。


#### 二、CI环境下，如果构建容器不支持恢复上次缓存的数据，则无法依赖物理缓存实现编译优化。

这一痛点的解决必须根据具体的CI方案来调整。理想的解决方案是CI环境打包时按以下过程执行：

1. 首次打包后，将缓存文件备份，存储到容器外
2. 二次打包时，执行：安装依赖 -> 恢复缓存 -> 打包编译。

## turborepo

如果CI环境下的缓存还原能够得到解决，则项目就可以采用 [turborepo](https://turbo.build/) 库来进行缓存管理。

`turborepo` 是 vercel 旗下的一款高性能打包工具，旨在解决多仓库（monorepo）下的缓存管理问题。

#### 多仓库

在单项目中，模块间相互依赖，更改一个文件很可能“牵一发而动全身”，很难分清哪些模块需要重新打包、哪些模块需要使用缓存。但在多仓库中，仓库之间的结构相对稳定，如果某仓库没有进行任何更改，则可以放心大胆的使用其缓存资源。

举例来说，假如我们把一个独立的项目分为以下仓库：
- 业务模块一，依赖UI组件库
- 业务模块二，依赖UI组件库
- UI组件库

打包时：
- 修改【业务模块一】仓库的代码 -> 业务模块一未命中缓存重新打包，模块二和UI使用缓存
- 修改【UI组件库】仓库的代码 -> 业务模块一、二、UI库均未命中缓存，重新打包。

#### turborepo赋能

一、turborepo 采用我们[前面提到的缓存策略](#一、当你不明确哪些依赖会让项目物理缓存失效时，很容易产生构建缓存不失效，导致产物是旧的问题，极大影响研发效率。)来判断是否命中缓存。并可以自由配置缓存策略，比如指定参与生成哈希值的文件集（input,output）：

```json
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts", "test/**/*.tsx"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
```

或是指定开发环境下不需要缓存：

```json
"dev": {
      "cache": false,
      "persistent": true
}
```

二、turborepo 采用了 `pipeline` 配置来执行工作流：如：

```json
"pipeline": {
    "build": {
      "dependsOn": ["^build"],
    },
    "deploy": {
      "dependsOn": ["build", "test", "lint"]
    },
    "test": {
      "dependsOn": ["build"],
    },
}
```

以上配置表示:
- `test` 会在 `build` 完成后执行
- `deploy` 会在 `build,test,lint` 完成后执行

## 基于 turborepo 改造的 umi + antd 多仓库示例

[https://github.com/Lemonnnnnnnnnnn/workspace-demo/tree/master/examples/umi-antd](https://github.com/Lemonnnnnnnnnnn/workspace-demo/tree/master/examples/umi-antd)