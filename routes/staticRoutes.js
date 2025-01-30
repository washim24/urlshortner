const express = require('express');
const URL = require('../models/url');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        // Wait for the database query to resolve
        const allShortUrls = await URL.find({});
        // Pass the resolved array to the EJS template
        return res.render('home', {
                allShortUrlss: allShortUrls
        });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).send("An error occurred while fetching URLs");
    }
});

module.exports = router;
