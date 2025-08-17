const direction = Object.freeze({
    Left: 1,
    Right: 2
})

const data = [
    {
        "id": 1,
        "img": "https://posterhouse.org/wp-content/uploads/2021/05/moonlight_0.jpg",
        "currentImage": "https://m.media-amazon.com/images/M/MV5BNzYwMTQ1ODY1MV5BMl5BanBnXkFtZTgwMTU5NDc5OTE@._V1_.jpg",
        "title":"Moonlight",
        "currrentWindow": true
    },
    {
        "id": 2,
        "img":"https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeef_6408f676b5811234c887ca62_top%2520gun%2520maverick-min.png",
        "currentImage": "https://variety.com/wp-content/uploads/2020/04/top-gun-maverick.jpg",
        "title": "Top gun maverick",
        "currrentWindow": false
    },
    {
        "id": 3,
        "img": "https://m.media-amazon.com/images/I/71i6L1vZjiL._AC_SL1058_.jpg",
        "currentImage": "https://m.media-amazon.com/images/M/MV5BMjMyODY3NTc3N15BMl5BanBnXkFtZTcwMjc2NTk1Nw@@._V1_.jpg",
        "title":"Titanic",
        "currrentWindow": false
        
    },
    {
        "id": 4,
        "img":"https://m.media-amazon.com/images/I/81dae9nZFBS._UF894,1000_QL80_.jpg",
        "currentImage": "https://s.marketwatch.com/public/resources/images/MW-GF238_blackp_ZG_20180311165006.jpg",
        "title": "Black Panther",
        "currrentWindow": false
    },
    {
        "id": 5,
        "img":"https://graphicdesignjunction.com/wp-content/uploads/2024/08/movie-poster-15.jpg",
        "currentImage": "https://www.joblo.com/wp-content/uploads/2024/05/bad_boys_ride_or_die_final_trailer-1280x720.jpg",
        "title": "Bad boys: Ride or Die",
        "currrentWindow": false
    },
    {
        "id": 6,
        "img":"https://img.buzzfeed.com/buzzfeed-static/static/2022-04/4/20/asset/0f12255e2129/sub-buzz-817-1649105149-10.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
        "currentImage": "https://m.media-amazon.com/images/M/MV5BMzNiMTE5ZTItZmZmMC00M2E5LWExZGYtYjAzMDZlMTM5NTkyXkEyXkFqcGdeQW1yb2Njbw@@._V1_.jpg",
        "title": "Jurassic Park",
        "currrentWindow": false
    },
    {
        "id": 7,
        "img":"https://fictionmachine.com/wp-content/uploads/2025/01/challengers_poster.jpg",
        "currentImage": "https://m.media-amazon.com/images/M/MV5BZWQ1ZTUyZTQtNjIyYi00ZGQ2LTg1YTAtMTMwY2I3N2EzYWYyXkEyXkFqcGc@._V1_.jpg",
        "title": "Challengers",
        "currrentWindow": false
    },
    {
        "id": 8,
        "img":"https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg",
        "currentImage": "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/2b6552283ad874773ba23f9ecee451188b51dde2ae611598307600aad1679f61.jpg",
        "title": "Avengers",
        "currrentWindow": false
    },
    {
        "id": 9,
        "img":"https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
        "currentImage": "https://m.media-amazon.com/images/M/MV5BNDMzNTc2NmYtZDA2NC00YjFiLTliOWUtMWY3NTNjMDBjYzk0XkEyXkFqcGdeQWFybm8@._V1_.jpg",
        "title": "The Batman",
        "currrentWindow": false
    },
    {
        "id": 10,
        "img":"https://www.posterist.co.uk/cdn/shop/files/pulp-fiction-movie-poster-01.jpg?v=1698402231",
        "currentImage": "https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_.jpg",
        "title": "Pulp Fiction",
        "currrentWindow": false
    }
]

function init() {
       let next5Windows = getFiveWindows(data, direction.Right);
       let section =  document.getElementById("mainSection");
       
        let counter = 1
        console.log(next5Windows);
        
        next5Windows.forEach(w => {
           section.appendChild(createDiv(w,counter));
            counter++
        });
}

function getFiveWindows(data, directions) {
    let nextCurrentIndex;

    let currentIndex = data.findIndex(d => d.currrentWindow === true);

    if (currentIndex === -1) {
        return;
    }

    data[currentIndex].currrentWindow = false;

    nextCurrentIndex = directions === direction.Left
        ? (currentIndex - 1 + data.length) % data.length
        : (currentIndex + 1 + data.length) % data.length

    data[nextCurrentIndex].currrentWindow = true;

    const retrunData = [data[(nextCurrentIndex -1 + data.length) % data.length]];

    for (let i = 0; i <= 3; i++){
     retrunData.push(data[(nextCurrentIndex + i) % data.length])
    }

    return retrunData
}

function onChange(nextDirection) {

    const next5Windows = getFiveWindows(data, nextDirection)
    
        if (!next5Windows) {
            return
        }

        const section = document.getElementById("mainSection");

        section.innerHTML = ""

        let counter = 1;

          next5Windows.forEach(w => {
              section.appendChild(createDiv(w,counter));
              counter++
        });
}

function createDiv(data, num) {
    let newDiv = document.createElement("div")
              
    newDiv.className = "windowView"
    newDiv.id = "Window_" + num


    newDiv.style = `background-image: url(${data.img});`
    + "background-position: center top;"
      + "background-size: cover;" 
        + "background-repeat: no-repeat;"
    + "cursor: pointer;"
    
    if (data.currrentWindow) {
        newDiv.classList.add("animateLoadMain")
    newDiv.innerHTML = `<h2 class="windowView_title">${data.title}</h2>`
        newDiv.style = `background-image: url(${data.currentImage});`
        + "background-position: center top;"
          + "background-size: cover;" 
            + "background-repeat: no-repeat;"
            + "cursor: pointer;"
        
           return newDiv;
    }

    newDiv.style = `background-image: url(${data.img});`
    + "background-position: center top;"
      + "background-size: cover;" 
        + "background-repeat: no-repeat;"
        + "cursor: pointer;"
    
         return newDiv;
 
}
init()


function automaticChange() {
      setInterval( () => onChange(direction.Right),4000 )  
}

automaticChange()