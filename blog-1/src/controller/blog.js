const getList = (author, keyword) =>{
    // 模拟数据
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            createTime: 15252525252,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            createTime: 254871214541,
            author: 'lisi'
        }
    ]
}

const getDetail = id =>{
    return {
        id: 1,
        title: '标题1',
        content: '内容1',
        createTime: 15252525252,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) =>{
    console.log(blogData)
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) =>{
    return false
}

const delBlog = id =>{
    return false
}

module.exports = {
    getList, 
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}