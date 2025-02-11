import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NewBlog from './NewBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Footer from './Footer';
import { ThemeProvider } from './ThemeContext';
function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/newblog' element={<NewBlog />} />
              <Route path='/blogs/:id' element={<BlogDetails />} />
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
