// packages needed in this file
const express = require('express')


//express routes handler
const router = express.Router()

router.get('/:code', async (req, res) => {
    const urlCode = req.params.code;
    res.send(`urlCode: ${urlCode}`);
});

module.exports = router
