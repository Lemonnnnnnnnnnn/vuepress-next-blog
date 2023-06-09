import fs from 'fs';
import path from 'path';

// 获取unix系统的分隔符
const sep = path.sep;
// 获取windows系统的分隔符
const winSep = path.win32.sep;
// 根据unix系统或windows系统选择分隔符
const systemSep = process.platform === 'win32' ? winSep : sep;

const source_dir = path.join(__dirname, '../../');
const source_dir_pure = source_dir.slice(0, source_dir.length - 1); // remove last slash


function fn(dir: string): void {
    // let results: string[] = [];
    const list = fs.readdirSync(dir);

    // 判断是否有子文件夹
    let hasSubDir = false;
    const _list = list.filter((file) => file.indexOf('.vuepress') === -1)

    for (let file of _list) {
        file = dir + systemSep + file;

        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            hasSubDir = true
        }
    }

    if (hasSubDir) {
        const readmePath = dir + systemSep + 'README.md';
        // 获取source_dir后面的路径
        const file_path = dir.slice(source_dir.length);
        let readmeContent = ''

        // 遍历子文件夹
        for (let file of _list) {
            readmeContent += `## ${file} \n[${file}](/${file_path}/${file}/) \n`;

            const stat = fs.statSync(dir + systemSep + file);
            if (stat && stat.isDirectory()) {
                fn(dir + systemSep + file)
            }
        }

        fs.writeFileSync(readmePath, readmeContent);
    } else {
        // 将当前文件夹目录名写入README.md
        const readmePath = dir + systemSep + 'README.md';
        const readmeContent = `# ${dir.split(systemSep).pop()}`;
        fs.writeFileSync(readmePath, readmeContent);
    }
}

fn(source_dir_pure);
