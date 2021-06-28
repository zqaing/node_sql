const handleBlogRouter = require('./src//router/blog')
const handleUserRouter = require('./src//router/user')

const serverHandle = (req, res) =>{
    // 设置返回格式
    res.setHeader('Content-Type', 'application/json')

    const url = req.url
    req.path = url.split('?')[0]

    //  处理blog路由
    const blogData = handleBlogRouter(req,res)
    if(blogData){
        res.end(JSON.stringify(blogData))
        return
    }

    // 处理user路由
    const userData = handleUserRouter(req,res)
    if(userData){
        res.end(JSON.stringify(userData))
        return
    }


    // 返回 404
    res.writeHead(404, {"Content-Type": "text/plain"})
    res.write('404 Not Found')
    res.end()
    
}

module.exports = serverHandle