![bundler scraper image](Assets/bundler-scraper.png)

# Bundler Scraper

This is the core scraper which powers bundler. It follows simple MVC coding pattern with splitted cralwers.

**Crawler:** These are the entities which scraped website. Each crawler is designed to scrape a particular website. We have different crawlers like youtube.crawler and medium.crawler

#### Supported Endpoints

**Endpoint to Scrape Articles:**

```
http://localhost:5000/api/v1/{crawlerName}?title={searchPhrase}
```

**Endpoint to Scarpe Similar Topics from a given query:**

```
http://localhost:5000/api/v1/tags?topic={topic}
```

**Mock Requests**

###### Medium Mockup Request

```
http://localhost:5000/api/v1/scrape/medium?title=arts
```

```
{
    "articles": [
        {
            "author": {
                "img": "https://cdn-images-1.medium.com/fit/c/72/72/1*2Whw_0yDRKM_dIhO4iqu6Q.png",
                "profile": "https://medium.com/@uniartsnetwork",
                "id": "99e8483d590d"
            },
            "article": {
                "url": "https://medium.com/@uniartsnetwork/uni-arts-cross-chain-nft-auction-house-96c52007bd1",
                "readingTime": 120,
                "publishedOn": "2021-03-03T11:16:48.977Z",
                "img": "https://cdn-images-1.medium.com/fit/t/1600/480/1*IHFtz3KuCVnD2QIRyFEh7Q.png",
                "title": "Uni-Arts: Cross-Chain NFT Auction House",
                "likes": 27000,
                "id": "0d1ff0c8e48763ef670e8cba5366"
            }
        },
	...
    ],
    "searchWord": "arts",
    "source": {
        "title": "medium",
        "url": "https://medium.com"
    }
}
```

###### Youtube Mockup Request

```
http://localhost:5000/api/v1/scrape/youtube?title=react
```

```
{
    "articles": [
        {
            "author": {
                "url": ""
            },
            "video": {
                "title": "Learn while you're at home",
                "img": "",
                "duration": 0
            }
        },
        {
            "author": {
                "name": "Modern World",
                "channelID": "UC5BdO0zxqBHKL4QS1oWAiPg",
                "url": "https://yt3.ggpht.com/ytc/AKedOLSjlpvTiamszbququLH-WFwCUBohgtgOJ2o4uGVqQ=s68-c-k-c0x00ffffff-no-rj",
                "ownerBadges": [
                    "Verified"
                ],
                "verified": true
            },
            "video": {
                "title": "Great Asian Art Skill! Creative Art Ideas Talented People! Satisfying Art works for week #26!",
                "id": "7_PHJz0W564",
                "url": "https://www.youtube.com/watch?v=7_PHJz0W564",
                "img": "https://i.ytimg.com/vi/7_PHJz0W564/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDf6NtAMIXS4Ob0ehTwPzR-tNshlw",
                "badges": [
                    "New"
                ],
                "desc": null,
                "views": 2979,
                "publishedOn": "2 hours ago",
                "duration": 510
            }
        },
	...
    ],
    "searchWord": "arts",
    "source": {
        "title": "youtube",
        "url": "https://youtube.com"
    }
}
```

###### Tags Scraper Mockup Request

```
http://localhost:5000/api/v1/tags?topic=immer
```

```
{
    "tags": [
        {
            "url": "https://medium.com/tag/immer?source=search",
            "tag": "Immer"
        },
        {
            "url": "https://medium.com/tag/javascript?source=search",
            "tag": "JavaScript"
        },
        {
            "url": "https://medium.com/tag/react?source=search",
            "tag": "React"
        },
        {
            "url": "https://medium.com/tag/redux?source=search",
            "tag": "Redux"
        },
        {
            "url": "https://medium.com/tag/immutability?source=search",
            "tag": "Immutability"
        },
        {
            "url": "https://medium.com/tag/immutable?source=search",
            "tag": "Immutable"
        },
        {
            "url": "https://medium.com/tag/virtual-reality?source=search",
            "tag": "Virtual Reality"
        },
        {
            "url": "https://medium.com/tag/immersive-theatre?source=search",
            "tag": "Immersive Theatre"
        },
        {
            "url": "https://medium.com/tag/np-newswire?source=search",
            "tag": "Np Newswire"
        },
        {
            "url": "https://medium.com/tag/technology?source=search",
            "tag": "Technology"
        }
    ]
}
```

For complete mock up requests checkout the shared [Postman collection](https://drive.google.com/file/d/1v8lSVR8RXQiIFht-0NFUG6a5cYHoNv1n/view?usp=sharing).
