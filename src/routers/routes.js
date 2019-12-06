const express = require('express');

const routes = express.Router();
const UserModel = require('../models/UserModel');

routes.post('/user', async(req, res, next) => {
    console.log(req.body);
    if (req.body) {
        console.log(req.body);
        new UserModel.save(req.body).then((doc) => {
            res.send({ message: "SAved Successfully" });
        }).catch(err => {
            res.status(500).send({ message: err });
        })
    } else {
        res.status(400).send("missing required fields");
    }
});



module.exports = routes;