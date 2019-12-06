const express = require('express');

const routes = express.Router();
const UserModel = require('../models/UserModel');

routes.post('/user', (req, res, next) => {
    console.log(req.body);
    if (req.body) {
        console.log(req.body);
        const user = new UserModel(req.body);
        console.log(user);
        user.save().then((doc) => {
            res.send({
                message: "Saved Successfully",
                data: doc
            });
        }).catch(err => {
            res.status(500).send({
                message: err
            });
        })
    } else {
        res.status(400).send("missing required fields");
    }
});



module.exports = routes;