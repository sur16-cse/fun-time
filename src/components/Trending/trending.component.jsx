import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import SingleContent from '../singleContent/singleContent.component'
import CustomPagination from '../pagination/pagination.component'
const Trending = () => {
  const [trending,setTrending]=useState([])
  const [page,setPage]=useState(1);
  const [pages,setPages]=useState(10);
  useEffect(()=>{
    // console.log(page);
    fetchTrending();
    // eslint-disable-next-line
  },[page])
  const fetchTrending=async()=>{
    const {data}=await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      )
      console.log(data);
      setTrending(data.results)
      setPages(data.total_pages)
  }
  return (
    <>
      <div className="pageTitle">Trending Today</div>
      <div className="card">
        {
          trending && trending.map((trend)=>(
            <SingleContent 
            key={trend.id} 
            id={trend.id}
            poster={trend.poster_path}
            title={trend.title || trend.name } 
            date={trend.first_air_date || trend.release_date}
            media={trend.media_type}
            vote={trend.vote_average}
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

export default Trending