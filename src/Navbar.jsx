import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import ThemeContext from './ThemeContext';
import styles from './styles/navbar.module.css'

function Navbar() {
  const {toggleDarkMode, isDarkMode} = useContext(ThemeContext);
  return (
    <nav className={styles.navbar}>
        <h1>Blog</h1>
        <div className={styles.links}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/newblog" className={styles.newBlog}>New Blog</NavLink>
            <label className={styles.switch}>
              <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode}/>
              <span className={styles.slider}></span>
            </label>
        </div>
       
    </nav>
  )
}

export default Navbar