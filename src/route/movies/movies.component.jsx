import axios from 'axios'
import React, {useState, useEffect } from 'react'
import SingleContent from '../../components/singleContent/singleContent.component';
import CustomPagination from '../../components/pagination/pagination.component';
import Genres from '../../components/genres/genres.component';
import useGenres from '../../hooks/useGenre';
const Movies = () => {
  const [movies,setMovies]=useState([]);
  const [page,setPage]=useState(1);
  const [pages,setPages]=useState(10);
  const [selectedGenres,setSelectedGenres]=useState([]);
  const [genres,setGenres]=useState([])
  const genreforURL=useGenres(selectedGenres)
  useEffect(()=>{
    fetchMovies()
    // eslint-disable-next-line
  },[page,genreforURL])
  const fetchMovies=async()=>{
   const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
   setMovies(data.results)
   setPages(data.total_pages)
  }
  return (
    <>
    <div className="pageTitle">Discover Movies</div>
    <Genres 
      type="movie" 
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres} 
      genres={genres}
      setGenres={setGenres}
      setPage={setPage}
    />
    <div className="card">
        {
          movies && movies.map((movie)=>(
            <SingleContent 
            key={movie.id} 
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title || movie.name } 
            date={movie.first_air_date || movie.release_date}
            media={movie.media_type}
            vote={movie.vote_average}
            />
          ))
        }
      </div>
     {
      pages>1 && (<CustomPagination setPage={setPage} pages={pages} pageNo={page}/>)
     }
      </>
  )
}

export default Movies