import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Recipe from './pages/Recipe'
import * as rd from 'react-router-dom'
import Search from './pages/Search'
import Header from './common/Header'
import Footer from './common/Footer'
import Signin from './pages/Signin'
import Signup from './pages/Signup'


function Base() {
  return (
    <>
      <Header/>
      <rd.Outlet />
      <Footer/>
    </>
  );
}

function App() {
  return (
    <>
      <rd.BrowserRouter>
        <rd.Routes>
          <rd.Route element={<Base />} path="/">
            <rd.Route path="" element={<Home />} />
            <rd.Route path="/recipe" element={<Recipe/>} />
            <rd.Route path="/search" element={<Search/>} />
            <rd.Route path="/contact" element={<Contact />} />
            <rd.Route path="/signin" element={<Signin />} />
            <rd.Route path="/signup" element={<Signup />} />
          </rd.Route>
        </rd.Routes>
      </rd.BrowserRouter>
    </>
  );
}

export default App