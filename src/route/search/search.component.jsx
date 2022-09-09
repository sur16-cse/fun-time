import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import Tabs from '@mui/material/Tabs';
import './search.styles.css'
import { makeStyles } from '@material-ui/core';
import axios from 'axios'
import SingleContent from '../../components/singleContent/singleContent.component';
import CustomPagination from '../../components/pagination/pagination.component';
const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width:"60%",
    backgroundColor:"#d1d8e0",
  },
  button: {
    "&:focus": {
      color: "white"
    }
  }
});
const Search = () => {
  const classes=useStyles()
  const [type,setType]=useState(0)
  const [page, setPage] = useState(1)
  const [searchText,setSearchText]=useState("")
  const [content,setContent]=useState([])
  const [pages,setPages]=useState(0)

  const handleChange = (event, newValue) => {
    setType(newValue);
    setPage(1)
  }

  const fetchApi=async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
    setContent(data.results)
    setPages(data.total_pages)
  }
  useEffect(() => {
    window.scroll(0,0)
    fetchApi()
    // eslint-disable-next-line
  }, [type,page])

  console.log(searchText)
  
  return (
    <>
    <div className="textfield">
        <TextField 
          variant="filled" 
          color="primary"
          label="Search movies OR series"
          className={classes.root}
          style={{fontWeight:"500"}}
          inputProps={{style: {fontSize: 14, fontWeight:500, color:"black"}}}
          InputLabelProps={{style: {fontSize: 14,fontWeight:500, color:"black"}}} 
          onChange={(e)=>setSearchText(e.target.value)}
        />
        <Button 
          onClick={fetchApi}
          variant='contained' 
          style={{marginLeft:"8px" , 
          backgroundColor:"#d1ccc0"}}
          className={classes.button}
        >
            <SearchIcon style={{color:"white"}}/>
        </Button>
    </div>
    <Tabs 
        centered value={type} 
        TabIndicatorProps={{
        style: {
          backgroundColor: "whitesmoke",
          paddingBottom:"1.5px"
        }
      }}
      onChange={handleChange}
    >
      <Tab style={{width:"50%", color:"white"}} label="search movies"/>
      <Tab style={{width:"50%" ,color:"white"}} label="search tv series"/>
    </Tabs>
   
    <div className="card">
        {
          content.length>0 ? content.map((t)=>(
            <SingleContent 
            key={t.id} 
            id={t.id}
            poster={t.poster_path}
            title={t.title || t.name } 
            date={t.first_air_date || t.release_date}
            media={t.media_type}
            vote={t.vote_average}
            />
          )):
          searchText ?
            (type?<h2>No Movies Found</h2>: <h2>No Series Found</h2>)
            :
            <h2>Search Result is empty</h2>
        }
      </div>

      {
        pages>1 && (<CustomPagination setPage={setPage} pages={pages} pageNo={page}/>)
      }
    </>
  )
}

export default Search