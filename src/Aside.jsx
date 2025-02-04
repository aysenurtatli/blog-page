import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext'
import useFetch from './UseFetch';
import styles from './styles/aside.module.css'
function Aside({selectedCategory, onCategorySelect}) {
    const { isDarkMode } = useContext(ThemeContext);
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    const categories = [
        "All",
        "Technology",
        "Food",
        "Fashion",
        "Music",
        "Sports",
        "Lifestyle",
        "Finance",
        "Movies",
        "Art and design",
        "Photography",
      ];
    
  return (
    <div className={`${styles.content} ${isDarkMode ? styles.dark : styles.light}`}>
        <div className={styles.topBlogs}>
        <h3>Top 5 Blogs</h3>
        <ol>
        {blogs?.slice(0, 5).map((blog) => (
            <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
        ))}
        </ol>
        </div>
        <div className={styles.categories}>
            <h3>Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li>
                        <a href='#' className={styles.categoryLink} 
                        onClick={() => onCategorySelect(category)}
                        >
                            {category}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
  )
}

export default Aside