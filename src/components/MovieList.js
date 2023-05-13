import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import MovieCard from './MovieCard';
import "./MovieCard.css"
import AddMovie from './AddMovie';
import Start from './Start';

function MovieList({movies,setMovies,searchtext,searchrating}) {
  return (
    <>
<div className='eladdmovie'>
  <AddMovie movies={movies} setMovies={setMovies}/>
</div>
    <div className='elcarousel' >
    <Carousel fade>
      { movies.filter((el)=>el.name.toLowerCase().includes(searchtext.toLowerCase()) && el.rating>=searchrating).map((el)=>(
      <Carousel.Item key={el.id}>
        <img
          className="d-block w-100"
          src={el.posterurl}
          alt="slide"
        />
        <Carousel.Caption className='ecarouselcaption' >
          <h1>{el.name}</h1><br></br>
          
          <h2><Start rate={el.rating}/> </h2>
        </Carousel.Caption>
      </Carousel.Item>
       ))}
    </Carousel>
    </div>
    <div className='elcards'>
      {  movies.filter((el)=>el.name.toLowerCase().includes(searchtext.toLowerCase()) && el.rating>=searchrating).map((el)=>(
      <MovieCard el={el} key={el.id}/>
    ))}
    </div>
    </>
  );
}

export default MovieList
