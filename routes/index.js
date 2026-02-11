var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");

const NEWS_API_KEY = process.env.NEWS_API_KEY;

router.get("/articles", (req, res) => {
  const url =
    `https://newsapi.org/v2/everything?` +
    `domains=blast-info.fr,climaxfanzine.fr,le1hebdo.fr,lecri.media&` +
    `language=fr&` +
    `sortBy=popularity&` +
    `pageSize=50&` +
    `apiKey=${NEWS_API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "ok") {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

module.exports = router;
