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

let [,mbc] = news;
console.log(mbc)

let {title, img} = mbc;
console.log(title, img)



let [, {title2, img2}] = news;
console.log(ititle2, img2)