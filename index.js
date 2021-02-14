const logger = require('./utils/logger');
const app =  require('./app');
const http = require('http');
const config = require('./utils/config');


const server = http.createServer(app);

server.listen(config.PORT, () =>{
    logger.info(`server running on port ${config.PORT}`)
})

// const http = require('http')
// const express = require('express')
// const app = express()
// const cors = require('cors')
// const mongoose = require('mongoose')

// const blogSchema = mongoose.Schema({
//   title: String,
//   author: String,
//   url: String,
//   likes: Number
// })


// blogSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//       returnedObject.id = returnedObject._id.toString()
//       delete returnedObject._id
//       delete returnedObject.__v
//   }
// });

// const Blog = mongoose.model('Blog', blogSchema)

// const mongoUrl = 'mongodb+srv://bloglist:maloney@cluster0.toyng.mongodb.net/<dbname>?retryWrites=true&w=majority'
// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
// .then(() => {
//   console.log('connected to MONGODB')
// }).catch(error => {
//   console.log(error.message)
// })

// app.use(cors())
// app.use(express.json())

// app.get('/api/blogs', (request, response) => {
//   Blog
//     .find({})
//     .then(blogs => {
//       response.json(blogs)
//     })
// })

// app.post('/api/blogs', (request, response) => {
//   const body = request.body;

//   const blog = new Blog({
//       title: body.title,
//       author: body.author,
//       url: body.url,
//       likes: body.likes
//     })

//   blog
//     .save()
//     .then(result => {
//       response.status(201).json(result)
//     }).catch(error => {
//       response.status(404).end()
//     })
// })

// const PORT = 3003
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })