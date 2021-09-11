const { defaultUrl } = require('../config/config');

// packages needed in this file
const express = require('express')


//express routes handler
const router = express.Router()

//import the Url database model
const Url = require('../database/models/links');

router.get('/', async (req, res) => {
        return res.redirect(defaultUrl);
  });

router.get('/:code', async (req, res) => {
    const urlCode = req.params.code;
    try {
        // find a document match to the code in req.params.code
        const url = await Url.findOne({
            where: { urlCode },
        })
        if (url) {
            // when valid we perform a redirect
            return res.redirect(url.longUrl)
        } else {
            // else return a not found 404 status
            return res.status(404).json('No URL Found')
        }

    }
    // exception handler
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
});

module.exports = router
