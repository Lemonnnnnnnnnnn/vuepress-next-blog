import fs from 'fs';
import path from 'path';
import { getFiles } from './getFiles';

const source_dir = path.join(__dirname, '../../');
const source_dir_pure = source_dir.slice(0, source_dir.length - 1); // remove last slash

export function getSideBar() {
    const sidebar: any = {};
    const files = getFiles(source_dir_pure);
    for (let file of files) {
        // 获取source_dir后面的路径
        const file_path = file.slice(source_dir_pure.length);
        // 获取文件名称
        const file_name = path.basename(file_path);
        // 获取文件名称前面的路径
        let file_path_pure = file_path.slice(0, file_path.length - file_name.length);
        file_path_pure = file_path_pure.replace(/\\/g, '/'); // replace \ to /

        if (sidebar[file_path_pure] === undefined) {
            sidebar[file_path_pure] = [];
            sidebar[file_path_pure].push(file_name);
        } else {
            sidebar[file_path_pure].push(file_name);
        }
    }
    // 对sidebar的value根据数字排序
    for (let key in sidebar) {
        sidebar[key].sort((a: string, b: string) => {
            const a_num = parseInt(a.split('.')[0]);
            const b_num = parseInt(b.split('.')[0]);
            return a_num - b_num;
        });
    }

    return sidebar
}

// console.log(getSideBar())

export function generateSidebar() {
    const sideBar = getSideBar();

    // 将sideBar 写入/docs/.vuepress/locale/sidebar.ts
    const sidebar_file = path.join(__dirname, '../locale/sidebar.ts');
    let sidebar_content = 'export default {\n';
    for (let key in sideBar) {
        sidebar_content += `    '${key}': [\n`;
        for (let file of sideBar[key]) {
            sidebar_content += `        '${file}',\n`;
        }
        sidebar_content += `    ],\n`;
    }
    sidebar_content += '}\n';
    fs.writeFileSync(sidebar_file, sidebar_content);
}

// generateSidebar()


