const fs = require('fs');
const path = require('path');

const content = 'vercount-domain-verify=e-lise.top,a7i8fzj8zfpozij8lsudf835'; // 替换为你的 Vercount 验证码
const filePath1 = path.join(__dirname, '../.deploy_git/.well-known/vercount-verify-a7i8fzj8zfpozij8lsudf835.txt'); // 替换为你的 Vercount 验证文件名
const filePath2 = path.join(__dirname, '../.deploy_git/.nojekyll');

fs.mkdirSync(path.dirname(filePath1), { recursive: true });
fs.writeFileSync(filePath1, content);

fs.writeFileSync(filePath2, '');