import React from 'react'
import Filter from '../Filter/Filter'
import './Header.css'


const Header = ({ onSearch }) => {
    //ici je vais avoir mon filtrage par categorie
  return (
  <header>
    <h1 className="title">Assessment Global Lizard</h1>
    <Filter onSearch = {onSearch}></Filter>
  </header>
  )
}

export default Header
