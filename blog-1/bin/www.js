const http = require('http')
const serverHandle = require('../app')
const PORT = 8000

const server = http.createServer(serverHandle)

server.listen(PORT, () =>{
    console.log('运行在localhost: ' + PORT + '端口')
})