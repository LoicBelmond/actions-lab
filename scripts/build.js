const fs = require('fs')
const path = require('path')

const outDir = path.join(process.cwd(), 'dist')
fs.mkdirSync(outDir, { recursive: true })
const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>Build OK</title></head>
<body><h1>✅ CI Build Succeeded</h1></body></html>`
fs.writeFileSync(path.join(outDir, 'index.html'), html)
console.log('Built to', outDir)
