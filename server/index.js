const express = require('express');

const app = express();

app.set('secret', 'iouad1230asdd1d');

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))
// 数据库连接
require('./plugins/db')(app)
// 定义接口路由
require('./routes/admin')(app)
app.listen(3000, () => {
    console.log('http://localhost:3000');
})