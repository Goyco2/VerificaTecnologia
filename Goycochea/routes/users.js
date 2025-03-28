 const express = require('express');
const fs = require('fs');
const router = express.Router();

let users = JSON.parse(fs.readFileSync('users.json'));

router.get('/users', (req, res) => {
    res.json(users);
});

module.exports = router;
