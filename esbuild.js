const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/publish.ts'], // 入口文件
  bundle: true, // 打包所有依赖
  platform: 'node', // 针对 Node.js 环境
  outfile: './dist/index.js', // 输出文件
  target: 'es6', // 目标 ECMAScript 版本
  sourcemap: false, // 可选：生成 sourcemap 文件
}).catch(() => process.exit(1));