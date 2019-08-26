import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

// cover={category.cover} path={category.path} emoji={category.emoji} Esto es lo mismo
// que el spread operator usado en el component <Category/>

function useCategoryData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  // useEffect acepta dos parametros, una funcion y un array el cual, si se
  // deja vacio indica que en el momento en el que se monte el componente se dejará
  // de ejecutar la funcion (componentDidUpdate)
  useEffect(function () {
    setLoading(false)
    window.fetch('https://pet-a-book.juanpabloglezz.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

function floatingCategories () {
  const [showFixed, setShowFixed] = useState()
  useEffect(function () {
    const onScroll = (e) => {
      const newFixedPosition = window.scrollY > 200
      showFixed !== newFixedPosition && setShowFixed(newFixedPosition)
    }
    document.addEventListener('scroll', onScroll)
    // esto es para limpiar el useEffect y de evitar memory leaks 👇
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  return { showFixed }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoryData()
  const { showFixed } = floatingCategories()
  const renderList = (fixed) => (
    // inline conditional operator condition ? true : false
    // if fixed true then set fixed class else set an empty string
    // 👇 Antes estaba -->   <List className={fixed ? "fixed" : ''}>
    <List fixed={fixed}>
      {
        loading ? <Item loading={loading}><Category /></Item> : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  // es redundante poner if (loading === true)
  // if (loading) {
  //   return 'Cargando...'
  // }

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
