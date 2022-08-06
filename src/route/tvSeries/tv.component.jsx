import axios from 'axios'
import React, {useState, useEffect } from 'react'
import SingleContent from '../../components/singleContent/singleContent.component';
import CustomPagination from '../../components/pagination/pagination.component';
import Genres from '../../components/genres/genres.component';
import useGenres from '../../hooks/useGenre';
const TvSeries = () => {
  const [tv,setTv]=useState([]);
  const [page,setPage]=useState(1);
  const [pages,setPages]=useState(10);
  const [selectedGenres,setSelectedGenres]=useState([]);
  const [genres,setGenres]=useState([])
  const genreforURL=useGenres(selectedGenres)
  useEffect(()=>{
    fetchTv()
    // eslint-disable-next-line
  },[page,genreforURL])
  const fetchTv=async()=>{
   const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
   setTv(data.results)
   setPages(data.total_pages)
  }
  return (
    <>
    <div className="pageTitle">Discover Series</div>
    <Genres 
      type="tv" 
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres} 
      genres={genres}
      setGenres={setGenres}
      setPage={setPage}
    />
    <div className="card">
        {
          tv && tv.map((series)=>(
            <SingleContent 
            key={series.id} 
            id={series.id}
            poster={series.poster_path}
            title={series.title || series.name } 
            date={series.first_air_date || series.release_date}
            media={series.media_type}
            vote={series.vote_average}
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

export default TvSeries