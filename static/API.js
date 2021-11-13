class API{

  constructor(){
    this.api_key = 'de30d4bd5b8d6be6aeb4eb3e8225fc88'
    
  }
  async movie_data(id){
    const movie1 = fetch(`https://api.themoviedb.org/3/movie/${id[0]}?api_key=${this.api_key}&language=en-US`).then(response => response.json());

    const movie2 = fetch(`https://api.themoviedb.org/3/movie/${id[1]}?api_key=${this.api_key}&language=en-US`).then(response => response.json());

    const movie3 = fetch(`https://api.themoviedb.org/3/movie/${id[2]}?api_key=${this.api_key}&language=en-US`).then(response => response.json());

     const movie4 = fetch(`https://api.themoviedb.org/3/movie/${id[3]}?api_key=${this.api_key}&language=en-US`).then(response => response.json());

     const movie5 = fetch(`https://api.themoviedb.org/3/movie/${id[4]}?api_key=${this.api_key}&language=en-US`).then(response => response.json());

     const movie6 = fetch(`https://api.themoviedb.org/3/movie/${id[5]}?api_key=${this.api_key}&language=en-US`).then(response => response.json());

     const movie7 = fetch(`https://api.themoviedb.org/3/movie/${id[6]}?api_key=${this.api_key}&language=en-US`).then(response => response.json());

     const movie8 = fetch(`https://api.themoviedb.org/3/movie/${id[7]}?api_key=${this.api_key}&language=en-US`).then(response => response.json());

     const movie9 = fetch(`https://api.themoviedb.org/3/movie/${id[8]}?api_key=${this.api_key}&language=en-US`).then(response => response.json());

    let results = await Promise.all([movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9]);

    return results;
  }
}