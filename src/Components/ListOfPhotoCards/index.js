import React, { useState, useEffect } from 'react'
import { PhotoCard } from '../PhotoCard'
// import { photos } from '../../../api/db.json'

export const ListOfPhotoCards = (id, categoryId = 0, src) => {
  const [photos, setPhotos] = useState([])
  useEffect(function () {
    window.fetch('https://pet-a-book.juanpabloglezz.now.sh/photos/')
      .then(res => res.json())
      .then(response => {
        setPhotos(response)
      })
  }, [])

  return (
    <ul>
      {
        photos.map(photos => <li><PhotoCard key={id} id={id} {...photos} /></li>)
      }
    </ul>
  )
}
