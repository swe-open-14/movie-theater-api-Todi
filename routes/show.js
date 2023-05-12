const express = require('express');
const show = express()
const Show = require('../models/Show')
const User = require('../models/User')

show.get('/show', (req, res) => {
    res.json(Show)
})

show.get('/shows/:id', async (req, res) => {
    const userId = req.params.id;
    const oneShow = await findByPk(userId)
    res.json(oneShow)
})

show.get('/shows/:id', async(req, res) =>{
    const showId = req.params.id;
    const shows = await Show.findAll(showId);
    res.json(shows)
})


module.exports = user