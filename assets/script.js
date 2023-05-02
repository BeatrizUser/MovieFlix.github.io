const api_key = "?api_key=ea5dc70c6a7d2b531564695db26f4644"
const language_url = "&language=pt-BR&page=1"
const url = "https://api.themoviedb.org/3"

const moviesdb = [
    { 
        id:"movie/550",
        tipo: "Movies",
        title: "Clube da Luta",
        url:"https://embed.warezcdn.net/filme/tt0137523"
    },
    { 
        id:"movie/594767",
        tipo: "Movies",
        title: "Shazam! Fúria dos Deuses",
        url:"https://embed.warezcdn.net/filme/tt10151854"
    },
    { 
        id:"movie/414906",
        tipo: "Movies",
        title: "The Batman(2022)",
        url:"https://embed.warezcdn.net/filme/tt1877830"
    },
    { 
        id:"movie/6957",
        tipo: "Movies",
        title: "O Virgem de 40 Anos",
        url:"https://embed.warezcdn.net/filme/tt0405422"
    },
    { 
        id:"movie/791373",
        tipo: "Movies",
        title: "Liga da Justiça de Zack Snyder",
        url:"https://embed.warezcdn.net/filme/tt12361974"
    },
    { 
        id:"tv/95479",
        tipo: "Animes",
        title: "Jujutsu Kaisen",
        url:"https://embed.warezcdn.net/serie/tt12343534"
    },
    { 
        id:"tv/85937",
        tipo: "Animes",
        title: "Demon Slayer (Kimetsu no Yaiba)",
        url:"https://embed.warezcdn.net/serie/tt9335498"
    },
    { 
        id:"tv/1429",
        tipo: "Animes",
        title: "Attack on Titan",
        url:"https://embed.warezcdn.net/serie/tt2560140"
    },
    { 
        id:"tv/30984",
        tipo: "Animes",
        title: "Bleach",
        url:"https://embed.warezcdn.net/serie/tt0434665"
    },
    { 
        id:"tv/63926",
        tipo: "Animes",
        title: "One-Punch Man",
        url:"https://embed.warezcdn.net/serie/tt4508902"
    },
    { 
        id:"tv/13916",
        tipo: "Animes",
        title: "Death Note",
        url:"https://embed.warezcdn.net/serie/tt0877057"
    },
    { 
        id:"tv/36250",
        tipo: "Animes",
        title: "xxxHolic",
        url:"https://embed.warezcdn.net/serie/tt0488477"
    },
    { 
        id:"tv/30981",
        tipo: "Animes",
        title: "Monster",
        url:"https://embed.warezcdn.net/serie/tt0434706"
    },
    { 
        id:"tv/65249",
        tipo: "Animes",
        title: "Boku Dake Ga Inai Machi (Erased)",
        url:"https://embed.warezcdn.net/serie/tt5249462"
    },
    { 
        id:"tv/1418",
        tipo: "Series",
        title: "Big Bang: A Teoria",
        url:"https://embed.warezcdn.net/serie/tt0898266"
    },
    { 
        id:"tv/456",
        tipo: "Series",
        title: "Os Simpsons",
        url:"https://embed.warezcdn.net/serie/tt0096697"
    },
    { 
        id:"tv/95594",
        tipo: "Movies",
        title: "Velozes & Furiosos – Espiões do Asfalto",
        url:"https://embed.warezcdn.net/serie/tt8322592"
    },
    { 
        id:"movie/114150",
        tipo: "Movies",
        title: "A Escolha Perfeita",
        url:"https://embed.warezcdn.net/filme/tt1981677"
    },
    { 
        id:"movie/82695",
        tipo: "Movies",
        title: "Os Miseráveis",
        url:"https://embed.warezcdn.net/filme/tt1707386"
    },
    { 
        id:"movie/131631",
        tipo: "Movies",
        title: "Jogos Vorazes: Esperança Parte 1",
        url:"https://embed.warezcdn.net/filme/tt1951265"
    },
    { 
        id:"movie/131634",
        tipo: "Movies",
        title: "Jogos Vorazes: Esperança - O Final",
        url:"https://embed.warezcdn.net/filme/tt1951266"
    },
    { 
        id:"tv/69478",
        tipo: "Series",
        title: "O conto da Aia",
        url:"https://embed.warezcdn.net/serie/tt5834204"
    },
    { 
        id:"tv/39272",
        tipo: "Series",
        title: "Era uma Vez",
        url:"https://embed.warezcdn.net/serie/tt1843230"
    },
    { 
        id:"tv/204774",
        tipo: "Series",
        title: "Pacto Brutal: O Assassinato de Daniella Perez",
        url:"https://embed.warezcdn.net/serie/tt21339770"
    },
    { 
        id:"tv/113988",
        tipo: "Series",
        title: "Dahmer: Um Canibal Americano",
        url:"https://embed.warezcdn.net/serie/tt13207736"
    },
    { 
        id:"tv/100088",
        tipo: "Series",
        title: "The Last of Us",
        url:"https://embed.warezcdn.net/serie/tt3581920"
    },
    { 
        id:"tv/119051",
        tipo: "Series",
        title: "Wandinha",
        url:"https://embed.warezcdn.net/serie/tt3581920"
    },
    { 
        id:"tv/71712",
        tipo: "Series",
        title: "The Good Doctor",
        url:"https://embed.warezcdn.net/serie/tt6470478"
    },
    { 
        id:"tv/71728",
        tipo: "Series",
        title: "Jovem Sheldon",
        url:"https://embed.warezcdn.net/serie/tt6226232"
    },
    { 
        id:"movie/487491",
        tipo: "Movies",
        title: "Fala Sério, Mãe!",
        url:"https://embed.warezcdn.net/filme/tt7744802"
    },
]
async function Home(){
    for(let movie of moviesdb){
        let moviessession= $(".moviessession")
        let seriessession= $(".seriessession")
        let animessession= $(".animessession")

        let moviedata = await getMovie(movie)
        
        
        if(movie.tipo == "Animes"){
            animessession.append(moviedata)
        }else
        if(movie.tipo == "Series"){
            seriessession.append(moviedata)
        }else
        if(movie.tipo == "Movies"){
            moviessession.append(moviedata)
        }
    }
}
async function getMovie(movie){
    let id = movie.id

    const get_movie = await axios("https://api.themoviedb.org/3/"+id+api_key+language_url)
    const movie_data = get_movie.data

    const movieimg = movie_data.poster_path
    const moviedescription = movie_data.overview
    const movie_type = movie_data.genres[0].name
    const rating = movie_data.vote_average
    const rating_round = Number(rating).toFixed(1)
    console.log(movie_data)
    return (`
    <div class="card" style="width:14rem;">
        <img class="card-img-top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieimg}" alt="${movie.title}">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    <div class="container">
                <div class="row">
                <div class="col-sm-6 metadata">
                    <p class="rating">${rating_round}</p>
                </div>
                <div class="col-sm-6 metadata">${movie_type}</div>
                </div>
            </div>
        <p class="card-text">${moviedescription}</p>
        <a class="trailer-preview" href=${movie.url} target="new">&#9656</a>
        </div>
    </div>
    `)

}

$(document).ready(function() {
    Home()
});
