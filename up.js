const fs = require('fs');
const path = require('path');

const content = 'vercount-domain-verify=e-lise.top,wq42rfn3o6e23v6r6jpfop9g'; // 替换为你的 Vercount 验证码
const filePath1 = path.join(__dirname, '../.deploy_git/.well-known/vercount-verify-wq42rfn3o6e23v6r6jpfop9g.txt'); // 替换为你的 Vercount 验证文件名
const filePath2 = path.join(__dirname, '../.deploy_git/.nojekyll');

fs.mkdirSync(path.dirname(filePath1), { recursive: true });
fs.writeFileSync(filePath1, content);

fs.writeFileSync(filePath2, '');