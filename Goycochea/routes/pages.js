const express = require('express');
const fs = require('fs');
const router = express.Router();

let users = JSON.parse(fs.readFileSync('users.json'));

router.get('/people/:email', (req, res) => {
    let user = users.find(u => u.email === req.params.email);
    if (!user) {
        return res.status(404).send("Utente non trovato");
    }
    res.render('people', { user });
});

module.exports = router;
