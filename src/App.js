import React from 'react'
import { ListOfCategories } from '../src/Components/ListOfCategories'
import { ListOfPhotoCards } from '../src/Components/ListOfPhotoCards'

import { GlobalStyle } from './Styles/GlobalStyle'
import { Logo } from '../src/Components/Logo'

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
