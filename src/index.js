import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { App } from './App'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://pet-a-book.juanpabloglezz.now.sh/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app'))
