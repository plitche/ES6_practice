var news = [
    {
        "title": "sbs",
        "img": "http://sajkldhfwetr/qwet/sdg/sadg.jpg",
        "newslist": [
            "1111111",
            "2222222",
            "3333333",
            "4444444",
        ]
    },
    {
        "title": "mbc",
        "img": "http://sajkldhfwetr/qwet/sdg/mbc.jpg",
        "newslist": [
            "555555",
            "666666",
            "777777",
            "888888",
        ]
    }
]


function getNewsList([, {newsList}]) {
    console.log(newsList)
}

getNewsList(news)

function getNewsList([{newsList}]) {
    console.log(newsList)
}

getNewsList(news)