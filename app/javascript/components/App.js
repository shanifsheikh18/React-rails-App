import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from '../components/Home'
import Navbar from './navbar/Navbar'
import Posts from './posts/Posts'
import CreatePost from './posts/CreatePost'
import Services from './Services'
import ViewPost from './posts/ViewPost'
import EditPost from './posts/EditPost'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Footer from './Footer/Footer'
import Page404 from './Page404'
import About from './About/About'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/posts' element={<Posts/>} />
          <Route exact path="/posts/:id" element={<ViewPost/>} />
          <Route exact path="/posts/edit/:id" element={<EditPost/>} />
          <Route exact path='/new' element={<CreatePost/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='*' element={<Page404/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}
export default App