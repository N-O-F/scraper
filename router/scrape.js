const Router = require("express").Router();
const ScraperControllers = require("../controllers/scraper");

Router.get("/scrape/:site",ScraperControllers.SCRAPE);

module.exports = Router