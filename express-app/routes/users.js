const express = require('express');
const router = express.Router();

const users = [{
    id: 1,
    name: "Юра"
},
    {
        id: 2,
        name: "Даня"
    }]

let userId = 3;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(users);
});

router.post('/', function (req, res, next) {
    const newUser = {
        id: userId,
        name: req.body.name,
    }
    userId++;
    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;
