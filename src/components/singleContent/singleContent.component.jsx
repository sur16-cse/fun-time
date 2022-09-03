import React from 'react'
import { img_300,unavailable } from '../../config/config';
import { Badge} from '@mui/material';
import './singleContent.styles.css'
import FavoriteMenu from '../FavoritesMenu/menu.component';
import { useState } from 'react';

 const SingleContent = ({...trend}) => {
 const {id,poster,title,date,media,vote}=trend;
 const [item,setItem]=useState(null);
 const data={
  id:id,
  poster:poster,
  title:title,
  date:date,
  media:media,
  vote:vote
 }

  return (
    <>
    <div className='media'>
        <Badge badgeContent={vote  > 1 ? vote.toFixed(1):vote} color={vote > 6 ? 'primary':'secondary'}/>
        <FavoriteMenu key={data.id} menu={data}/>
        <img className='poster' src={ poster ? `${img_300}/${poster}`:unavailable} alt={`${title}`}/>
        <b className='title'>{title}</b>
        <span className='subTitle'>
            {media==='tv'?"TV Series":"Movie"}
        <span className="subTitle">{date}</span>
        </span>
    </div>
    </>
  )
}
//id={id} poster={poster} title={title} date={date} media={media} vote={vote}

export default SingleContent