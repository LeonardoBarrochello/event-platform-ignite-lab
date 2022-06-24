import { ApolloProvider } from '@apollo/client'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { client } from './lib/apollo'
import { Event } from './pages/Event'
import { Router } from './router'
import "./styles/global.css"


function App() {

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>

    </div>
  )
}


export default App