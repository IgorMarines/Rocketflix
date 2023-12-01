let randomNumber

async function getMovie() {
    randomNumber = Math.floor((Math.random() * 900) + 1)
    axios.get(`https://api.themoviedb.org/3/movie/${randomNumber}?api_key=a2d6ffe1f90a388b7ec15db194276dda&language=pt-BR`)
    .then(response => {
        let posterImg = response.data.poster_path
        let poster = `https://image.tmdb.org/t/p/w500/${posterImg}`
        let titulo = response.data.original_title
        let descricao = response.data.overview
        let resultado = document.querySelector('#resultado')
        resultado.innerHTML = `<div><img class="imagem-resultado" src="${poster}" alt=""></div>`
        resultado.innerHTML += `<div class= itens-resultado><strong class="titulo-resultado">${titulo}</strong></div>`
        resultado.innerHTML += `<strong class="descricao-resultado">${descricao}</strong>`

    })
    .catch(error => console.log(error))
}


function googleTranslateElementInit()
    {
        new google.translate.TranslateElement({
            pageLanguage: 'pt', //Idioma principal da página
            includedLanguages: 'en,es', //Idiomas que pode traduzir
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
        }, 'google_translate_element'); //google_translate_element é o elemento no div
    }

googleTranslateElementInit()
