import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'




 function getData(){

  const url = `${BASE_URL}${Math.floor(Math.random() * 1000)}?${API_KEY}&${language}`
  axios.get(url)
  .then(response => {
    const data = response.data
    console.log(url)
    console.log(data)  


    let list = []     
      data['genres'].forEach(element => {
      list.push(element['name'])      
    });

    
    let link_movie_poster = `${IMG_URL}${JSON.stringify(data['poster_path']).replace(/"/g, "")}`
    let render_movie_title = JSON.stringify(data['title']).replace(/"/g, "") /* expressão regular  */
    let render_movie_description = JSON.stringify(data['overview']).replace(/"/g, "")
    let render_movie_duration = JSON.stringify(data['runtime']).replace(/"/g, "")
    let render_movie_date = JSON.stringify(data['release_date']).replace(/"/g, "")

    
    const content = document.querySelector('main')

    content.innerHTML=    
    `
    <img src="${link_movie_poster}" alt="movie-poster" class="movie-poster" id="movie_poster">

    <h2 class="movie-title" id="movie_title">${render_movie_title}</h2>
    

    <p class="movie-description" id="movie_description">${render_movie_description}</p>

    <h3 class="movie-genero">Gênero</h3>
    <p class="movie-genero-p" id="movie_genero_p">${list}</p>

    <h3 class="movie-duration">Duração</h3>
    <p class="movie-duration-p" id="movie_duration_p">${render_movie_duration} minutos</p>

    <h3 class="movie-date">Lançamento</h3>
    <p class="movie-date-p" id="movie_date_p">${render_movie_date}</p>
`  
    
   
  })
  .catch(error => console.log(error))

} 

const buttonSeach = document.querySelector('#buttonSeach')

buttonSeach.addEventListener("click", getData)

/* getData()  */
