# websocket相关

## 一、koa依赖
```json
{
  "name": "webrtc-sever",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon index.js --watch index.js --exec babel-node",
    "start": "cross-env NODE_ENV=production node index.js --exec babel-node"
  },
  "keywords": [],
  "author": "kaiqiangren",
  "license": "MIT",
  "dependencies": {
    "consola": "^2.12.2",
    "koa": "^2.12.0",
    "koa-bodyparser": "^4.3.0",
    "koa-json": "^2.0.2",
    "koa-onerror": "^4.1.0",
    "koa-router": "^9.0.1",
    "socket.io": "^2.3.0"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "cross-env": "^7.0.2",
    "nodemon": "^2.0.4"
  }
}
```

## 二、服务端代码

```js
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import onerror from 'koa-onerror'
import consola from 'consola'
import ioSocket from 'socket.io'
import http from 'http'

const app = new Koa()
app.keys = ['keys', 'keyskeys']
app.proxy = true
app.use(bodyParser())
app.use(json())

// 创建server
const server = http.Server(app.callback());
const io = ioSocket(server);

io.on('connection', (socket) => {
  socket.send('连接成功!')

});

onerror(app)

server.listen(8000, () => {
  consola.ready({
    message: `Server listening on localhost:8000`,
    badge: true
  })
})
```


## 三、客户端代码

```js
import io from 'socket.io-client'

const socket = io('ws://localhost:8000')
socket.on('connection', client => {
   console.log(client)
})
socket.on('message', async (message) => {
   console.log(message)
})
```
