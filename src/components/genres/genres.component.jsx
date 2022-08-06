import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Chip } from '@mui/material'
import './genres.styles.css'
const Genres = ({type,selectedGenres,setSelectedGenres,genres,setGenres,setPage}) => {
    useEffect(()=>{
        fetchGenres();
        return()=>{ 
            setGenres([])
        }
         // eslint-disable-next-line
    },[])
    const handleRemove=(genre)=>{
        setSelectedGenres(selectedGenres.filter((g)=>g.id!==genre.id));
        setGenres([...genres,genre])
        setPage(1)
    }
    const handleAdd=(genre)=>{
        setSelectedGenres([...selectedGenres,genre])
        setGenres(genres.filter((g)=>g.id!==genre.id));
        setPage(1)
    }
    const fetchGenres=async()=>{
        const {data}=await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setGenres(data.genres)
    }
    console.log(genres)
  return (
    <div className='genre'>
    {
      selectedGenres &&  
     (selectedGenres.map(
        (genre)=> <Chip 
        label={genre.name}
        color="primary"
        size='small' 
        style={{margin:"6px"}} 
        clickable 
        key={genre.idx}
        onDelete={()=>handleRemove(genre)}
        />
      ))
    }
    {
      genres &&  
     (genres.map(
        (genre)=> <Chip 
        label={genre.name} 
        size='small' 
        style={{margin:"6px",backgroundColor:"lightslategray", color:"lightcyan"}} 
        clickable 
        key={genre.id} 
        onClick={()=>handleAdd(genre)}
        />
      ))
    }
    </div>
  )
}

export default Genres