import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SearchResult from './components/SearchResult'
import { ApiContext } from './utils/ContextApi'

function App() {

  return (
    <ApiContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/:query/:startIndex' element={<SearchResult/>} />
        </Routes>
      </BrowserRouter>
    </ApiContext>
  )
}

export default App
