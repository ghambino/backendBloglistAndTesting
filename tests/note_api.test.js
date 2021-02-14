const app = require('../app');
const mongoose = require('mongoose');
const supertest = require('supertest')
const Bloglist = require('../models/notes')

const api = supertest(app)

const initialBloglist = [
    {
        "title": "the universal truth of masculinity",
        "author": "abdulwahab abbas",
        "url": "www.universaltruth.com/74993",
        "likes": 204,
        "id": "602437e733b54f19586f9362"
    },
    {
        "title": "the backend development isnt funny",
        "author": "abdulwahab abbas",
        "url": "www.universaltruth.com/993",
        "likes": 200,
        "id": "602439680355c01f08b1bdf9"
    }
];

beforeEach( async () => {
    await Bloglist.deleteMany({})
    let newBlogInput = new Bloglist(initialBloglist[0]);
    await newBlogInput.save()
    newBlogInput = new Bloglist(initialBloglist[1])
    await newBlogInput.save()
})

//supertest has it own ephemeral port for listen..hence index.js isnt needed

test('bloglist are returned as json', async () => {
    await api.get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('bloglist should return two data', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(2);
})

test('first blog topic is about masculinity', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].title).toBe("the universal truth of masculinity")
})

test('all bloglist are present', async () => {
    const response = await api.get('/api/blogs');
    expect(response.body).toHaveLength(initialBloglist.length)
})
 test('a specific blog title is among the returned', async () => {
     const response = await api.get('/api/blogs')

     const titleArray = response.body.map(blog => blog.title)
     expect(titleArray).toContain("the universal truth of masculinity")
 })

 



afterAll(() =>{
    mongoose.connection.close();
})