const express = require("express");

const server = express();
const PORT = process.env.PORT || 5001;


server.use(express.json())
server.use(express.urlencoded({extended:true}))


const ScrapeRouters = require("./router/scrape");

server.use("/api/v1/", ScrapeRouters);

server.listen(PORT, () => console.log(`Server Started at ${PORT}`));
