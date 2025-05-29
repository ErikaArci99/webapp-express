const { json } = require('express');
const connection = require('../data/db');

const index = (req, res) => {
    console.log('elenco film')
}

const show = (req, res) => {
    console.log('film con id' + req.params.id)
}

module.exports = { index, show }