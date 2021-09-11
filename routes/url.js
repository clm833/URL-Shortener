// packages needed in this file
const express = require('express');
const shortid = require('shortid');
const validUrl = require('valid-url');
const { baseUrl } = require('../config/config');

//import the Url database model
const Url = require('../database/models/links');


//express routes handler
const router = express.Router();

router.post('/shortener', async (req, res) => {
    let {
        longUrl,
        urlCode = undefined
    } = req.body

    // check base url if valid using the validUrl.isUri method
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL')
    }

    // if valid, we create the url code
    if (!urlCode) {
        urlCode = shortid.generate()
    }

    // check long url if valid using the validUrl.isUri method
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({
                where: { longUrl }
            });
            if (url) {
                res.json(url);
            } else {
                url = await Url.create({
                    longUrl,
                    shortUrl: `${baseUrl}/${urlCode}`,
                    urlCode,
                });
                res.json(url);
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).json('SQL Error')
        }
    } else {
        res.status(401).json('Invalid longUrl')
    }
});
module.exports = router;
