import fs from 'fs';
import path from 'path';


// 获取unix系统的分隔符
const sep = path.sep;
// 获取windows系统的分隔符
const winSep = path.win32.sep;
// 根据unix系统或windows系统选择分隔符
const systemSep = process.platform === 'win32' ? winSep : sep;


export function getFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    
    for(let file of list) {
        file = dir + systemSep + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if(file.indexOf('.vuepress') !== -1) continue;
            results = results.concat(getFiles(file));
        } else {
            results.push(file);
        }

    }

    return results;
}

