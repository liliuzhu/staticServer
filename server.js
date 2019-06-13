const port = 5000
let path = require('path');
let express = require('express'), //引入express模块
   app = express(),
   server = require('http').createServer(app);
app.use(express.static(path.join(__dirname, 'static'))); //指定静态HTML文件的位置
app.get('/*', function (req, res) {
    const html = fs.readFileSync(resolve('./index.html'), 'utf-8')
    return res.send(html)
})
server.listen(port);
server.setTimeout(0);   //设置不超时，所以服务端不会主动关闭连接
console.log('server started', 'http://127.0.0.1:' + port);
