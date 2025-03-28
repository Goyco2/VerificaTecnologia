const express = require('express');
const fs = require('fs');
const router = express.Router();

let users = [];
try {
    users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
} catch (error) {
    console.error("Errore nella lettura di users.json:", error);
}

router.get('/users/:email', (req, res) => {
  let user = users.find(u => u.email === req.params.email);
  if (!user) {
      return res.status(404).json({ error: "Utente non trovato" });
  }
  res.json(user);
});


module.exports = router;
