const bloglistRouter = require('express').Router()
const Bloglist = require('../models/notes')
const logger = require('../utils/logger')
const middleware = require('../utils/middleware')

bloglistRouter.get('/', (request, response) =>{
    Bloglist.find({})
    .then(returnedlist => {
        response.json(returnedlist)
    })
    .catch(error => {
        logger.error(error.message);
    })
})

bloglistRouter.post('/', (request, response, next) => {
    const body = request.body

    const bloglist = new Bloglist({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    })

    bloglist.save().then(savedlist => {
        response.json(savedlist)
    }).catch(error => {
        logger.error(error.message)
        next(error)
    })
})

module.exports = bloglistRouter
