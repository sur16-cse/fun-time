import React from 'react'
import Pagination from '@mui/material/Pagination';
import './pagination.styles.css'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff",
        backgroundColor:"#2C3A47"
      }
    }
  }));
const CustomPagination = ({setPage,pages,pageNo}) => {
 const classes=useStyles()
 const handlePageChange=(page)=>{
    console.log(pageNo,"page");
    if(page.innerHTML===`<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>`)
    setPage(pageNo-1);
    else if(page.innerHTML===`<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>`)
    setPage(pageNo+1);
    else
    {
        if(page.textContent==='')
        setPage(pageNo+1)
        else
        setPage(Number(page.textContent));
    }
   
   window.scroll(0,0)
 }
  return (
    <div className='page'>
        <Pagination 
            classes={{ ul: classes.ul }}
            onChange={(e)=>handlePageChange(e.target)}
            count={pages}
            color='primary'
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
        />
    </div>
  )
}

export default CustomPagination