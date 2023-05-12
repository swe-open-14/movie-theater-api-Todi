const express = require('express');
const user = express()
const User = require('../models/User')
const Show = require('../models/Show')

user.get('/users', (req, res) => {
    res.json(User)
})

user.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
    const oneUser = await findByPk(userId)
    res.json(oneUser)
})

user.get('/shows/:id', async(req, res) =>{
    const showId = req.params.id;
    const shows = await Show.findAll(showId);
    res.json(shows)
})


module.exports = user