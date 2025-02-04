import React from 'react'
import styles from './styles/featuredBlog.module.css'
import { useContext } from 'react';
import useFetch from './UseFetch';
import ThemeContext from './ThemeContext'
import { Link } from 'react-router-dom';
function FeaturedBlog({blog}) {
  const { isDarkMode } = useContext(ThemeContext);
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  return (
    <div className={`${styles.featuredBlog} ${isDarkMode ? styles.dark : styles.light}`}>
    <Link to={`/blogs/${blog.id}`}>
      <div className={styles.featuredBlogImage}>
        <img src={blog.image}/>
      </div>
        <div className={styles.featuredBlogText}>
          <span className={styles.date}>{blog.date}</span>
          <h2 className={styles.title}>{blog.title}</h2>
          <span className={styles.author}>Written by: {blog.author}</span>
        </div>
    </Link>
  </div>
  )
}

export default FeaturedBlog