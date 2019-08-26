import React from 'react'
import { PhotoCard } from '../PhotoCard'
// import { photos } from '../../../api/db.json'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = { }) => {
  // Antes de usar GrapQL

  // const [photos, setPhotos] = useState([])
  // useEffect(function () {
  //   window.fetch('https://pet-a-book.juanpabloglezz.now.sh/photos/')
  //     .then(res => res.json())
  //     .then(response => {
  //       setPhotos(response)
  //     })
  // }, [])

  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}
