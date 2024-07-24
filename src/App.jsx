import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'
import Login from './Login'
import Container from './Container'
import Counter from './Counter'
import ToDo from './ToDo'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'
import ProductList from './ProductList'
import NameGenerator from './NameGenerator'
import GetGitURL from './GetGitURL'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'

function App() {

  return (
    <div className='App'> 

   {/* <Menu/>
   <Container/>
   <Counter/> */}
   {/* <Task1/>
   <Task2/>
   <Task3/>
   <Task4/> */}
   {/* <ProductList/> */}
   {/* <NameGenerator/> */}
   <GetGitURL/>

   {/* <BrowserRouter>
   <Link to = "/login/Lets-Login/123">Login</Link>
   <Link to="/counter">Counter</Link>

   <Routes>
    <Route path='/login/:title/:tokenId' element ={<Login/>}></Route>
    <Route path='/counter' element ={<Counter/>}></Route>

   </Routes>
   
   </BrowserRouter> */}

   </div>
  )
}

export default App
