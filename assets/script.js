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
    const rating = movie_data.vote_average
    const rating_round = Number(rating).toFixed(1)
    return (`
    <div class="card">
       <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieimg}">
       <div class="info">
        <h4>${movie.title}</h4>
        <p class="description_movie">${moviedescription}</p>
        <h2><i class="fa fa-star" aria-hidden="true"></i>${rating_round}</h2>
        <a href=${movie.url}><button>Watch Movie</button><a/>
       </div>
     </div>
    `)

}

$(document).ready(function() {
    Home()
});