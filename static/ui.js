class UI {
  Alert_pop_up() {
    const pop_up = document.createElement('h3');
    pop_up.textContent = 'Please Fill in Movie Name Below';
    pop_up.style = 'background-color: red;padding:5px;margin:5px;color:white';
    const container = document.querySelector('.container');
    container.insertBefore(pop_up,container.firstElementChild);

    setTimeout(()=>{
      pop_up.remove()
    },2000);
  }

  show(info){
    document.getElementById('M1').textContent = info[0].title;
    document.getElementById('image1').src =`https://image.tmdb.org/t/p/w500/${info[0].poster_path}`;
    document.getElementById('overview').textContent = `Overview: ${info[0].overview}`;
    document.getElementById('runtime').textContent = `Runtime: ${info[0].runtime} mins`;
    document.getElementById('popularity').textContent = `Popularity: ${info[0].popularity}`;
    document.getElementById('release_date').textContent = `Release Date: ${info[0].release_date}`;
    document.getElementById('budget').textContent = `Budget: $${info[0].budget}`;

    document.getElementById('M2').textContent = info[1].title;
    document.getElementById('image2').src =`https://image.tmdb.org/t/p/w500/${info[1].poster_path}`;
    document.getElementById('id1').textContent = info[1].id;

    document.getElementById('M3').textContent = info[2].title;
    document.getElementById('image3').src =`https://image.tmdb.org/t/p/w500/${info[2].poster_path}`;
    document.getElementById('id2').textContent = info[2].id;

    document.getElementById('M4').textContent = info[3].title;
    document.getElementById('image4').src =`https://image.tmdb.org/t/p/w500/${info[3].poster_path}`;
    document.getElementById('id3').textContent = info[3].id;

    document.getElementById('M5').textContent = info[4].title;
    document.getElementById('image5').src =`https://image.tmdb.org/t/p/w500/${info[4].poster_path}`;
    document.getElementById('id4').textContent = info[4].id;

    document.getElementById('M6').textContent = info[5].title;
    document.getElementById('image6').src =`https://image.tmdb.org/t/p/w500/${info[5].poster_path}`;
    document.getElementById('id5').textContent = info[5].id;

    document.getElementById('M7').textContent = info[6].title;
    document.getElementById('image7').src =`https://image.tmdb.org/t/p/w500/${info[6].poster_path}`;
    document.getElementById('id6').textContent = info[6].id;

    document.getElementById('M8').textContent = info[7].title;
    document.getElementById('image8').src =`https://image.tmdb.org/t/p/w500/${info[7].poster_path}`;
    document.getElementById('id7').textContent = info[7].id;

    document.getElementById('M9').textContent = info[8].title;
    document.getElementById('image9').src =`https://image.tmdb.org/t/p/w500/${info[8].poster_path}`;
    document.getElementById('id8').textContent = info[8].id;
  }
}