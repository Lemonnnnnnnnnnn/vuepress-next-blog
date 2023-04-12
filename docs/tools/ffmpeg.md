---
title: ffmpeg
date: 2023-02-05 00:25:57

categories:
  - 工具
tags:
  - 
sitemap:
  exclude: false
  changefreq: monthly
---


[ffmpeg](https://ffmpeg.org/) 是一个处理媒体文件的命令行工具 (command line based) 。

## 应用场景

### Bilibili视频爬取

如果你爬取B站的视频可以发现视频和音频文件是分离的，两者都用mp4格式。如果用 [shotcut](https://shotcut.org/) 等媒体处理工具合并后导出会花费大量时间（2.5小时的视频大概需要1个小时处理）。而使用 ffmpeg 进行合并则只需要3分钟。而且只需要一行代码：

```bash
ffmpeg -i video.mp4 -i audio.wav -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 output.mp4
```

接下来我们一步一步解析上面这一长串代码。

ffmpeg 调用的格式为 `ffmpeg [options] [[infile options] -i infile]... {[outfile options] outfile}...` .

#### `-i` 

`-i` 是 `-input` 的简写，表示输入文件

`-i video.mp4 -i audio.wav` 输入视频和音频文件

#### `-c`

`-c` 是 `-codec` 的简写。用 `-c:v` 表示视频（video）编码器、 `-c:a` 表示音频（audio）编码器。

- `-c:v copy` : 输出文件的视频格式和输入文件一致
- `-c:a aac` : 输出文件的音频格式为aac

#### `-map`

`-map` map表示映射，这个参数表示输入文件到输出文件的映射关系.

- `-map 0:v:0` : 将第一个输入文件的视频流作为输出文件的第一个视频流
- `-map 1:a:0` : 将第二个输入文件的音频流作为输出文件的第一个音频流

