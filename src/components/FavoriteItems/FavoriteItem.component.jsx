import React from 'react'
import './FavoriteItem.component.css'
const FavoriteItem = (it) => {
  const item = it.item
  return (
    <div color="white">{item.title}</div>
  )
}

export default FavoriteItem