const Router = require("express").Router();
const ScraperControllers = require("../controllers/scraper");

Router.get("/scrape/:site", ScraperControllers.SCRAPE);

Router.get("/tags", ScraperControllers.SCRAPE_TAGS);

module.exports = Router;
