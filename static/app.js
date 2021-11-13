
//initializing classes
let ui = new UI;
let api = new API;

const search = document.getElementById('movie_input')
const resultWrapper = document.getElementById('match')
const movie_search = document.getElementById('btn');
const load = document.querySelector('.loading')

document.addEventListener('DOMContentLoaded',domload)
search.addEventListener('keyup',search_movies);
movie_search.addEventListener('click',movie_searcher);

// domload
function domload() {
  document.querySelector('.recommendations').style.display='none'
}

// search function
function search_movies() {
  const input = search.value;
  
  const message = {
    letter: input
  };
  //Posting user search input to the server(to the auto suggestion engine in flask)
  fetch('/movies',{
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(message),
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  //collecting the suggested movies from flask to the client
  .then((response)=>{
    response.json().then((data)=>{
      //displaying the suggested movies
      document.getElementById('match').style.display = 'block';
      const movieList = document.getElementById('match').children;
      if (data.movie_List !== '') {
        movieList[0].textContent = data.movie_list[0]
        movieList[1].textContent = data.movie_list[1]
        movieList[2].textContent = data.movie_list[2]
        movieList[3].textContent = data.movie_list[3]
        movieList[4].textContent = data.movie_list[4]
        movieList[5].textContent = data.movie_list[5]
      }

      const List = [movieList[0],movieList[1],movieList[2],movieList[3],movieList[4],movieList[5]];
      List.forEach(item => {
        if (item.textContent === '') {
          item.style.display ='none'
        }else{
          item.style.display ='block'
        }
      });

      if (input === '') {
        document.getElementById('match').style.display = 'none'
      }
    })
  })
  
}
//the suggested movies onclick function
function movie_suggest(element) {
  let suggested = element.textContent;
  search.value = suggested;
  document.getElementById('match').style.display = 'none';
}
//movie search function with its recommendations
function movie_searcher() {
  if (search.value === '') {
    ui.Alert_pop_up();
  }else{
    load.classList.add('show')
    setTimeout(() => {
      load.classList.remove('show')
    }, 6000);
    document.querySelector('.recommendations').style.display='block';
    const message2 = {
      movie_entered: search.value
    };
    fetch('/recommend1',{
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(message2),
      cache: 'no-cache',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then((response)=>{
      response.json()
      .then((data)=>{
        api.movie_data(data.movie_id)
        .then(info =>{
          ui.show(info)
          
        })
      })
    })
    search.value = '';
  }
}

//recommend function for clicked movie and its recommendations 
function recommend(element) {
  
  let tmdb_id = element.children[2].textContent
  const clickedMovie = {
    movie_clicked: tmdb_id
  };
  load.classList.add('show')
  setTimeout(() => {
    load.classList.remove('show')
  }, 6000);
  //Posting clicked movie name to the recommendation engine in flask
  fetch('/recommend2',{
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(clickedMovie),
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(response =>{
    response.json()
    .then((data)=>{
      api.movie_data(data.movie_id)
      .then(info =>{
        ui.show(info)
        
      })
    })
  })
}



