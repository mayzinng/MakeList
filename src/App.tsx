import { useState } from 'react'
import { StartPage } from './assets/Pages/StartPage'
import { GlobalStyle } from './assets/Global'
import { Route, Routes, Link, Navigate, useNavigate, BrowserRouter } from "react-router-dom";
import { Home } from './assets/Pages/Home';
import { AddTask } from './assets/Components/AddTask';
import { AddTaskContextProvider, addTaskContext } from './Contexts/addTaskContext';


export function App() {

  return (
    <AddTaskContextProvider>
        <Routes>
            <Route path='/' element={<StartPage />}/>
            <Route path='/Home' element={<Home />}/>
            <Route path='/AddTask' element={<AddTask title={''} description={''} />} />
        </Routes>
        <GlobalStyle />
    </AddTaskContextProvider>
      
    
  )
}

