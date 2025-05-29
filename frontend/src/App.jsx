import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ShowBooks from './pages/ShowBooks';
import EditBooks from './pages/EditBooks';
import CreateBook from './pages/CreateBook';
import DeleteBooks from './pages/DeleteBooks';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={<CreateBook />}/>
      <Route path='/books/details/:id' element={<ShowBooks />}/>
      <Route path='/books/edit/:id' element={<EditBooks />}/>
      <Route path='/books/delete/:id' element={<DeleteBooks />}/>
    </Routes>
  )
}

export default App
