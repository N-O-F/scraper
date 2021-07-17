const express = require("express");

const server = express();
const PORT = process.env.PORT || 5000;

server.use(express.json())
server.use(express.urlencoded({extended:false}))

const ScrapeRouters = require("./router/scrape");

server.use("/api/v1/",ScrapeRouters)


server.listen(PORT);