import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import ThemeContext from './ThemeContext'
import styles from './styles/blogList.module.css'

function BlogList({blogs, title, handleDelete}) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
    <h2>{title}</h2>
   
    <div className={styles.blogList}> 
    {blogs.length === 0 ? (
      <div>No blogs found</div>
    ) : (
        blogs.map((blog) => (
        <div className={`${styles.blogPreview} ${isDarkMode ? styles.dark : styles.light}`} key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div className={styles.blogImage}>
              <img src={blog.image} alt="" />
            </div>
            <div className={styles.blogText}>
              <span className={styles.blogDate}>{blog.date}</span>
              <h2>{blog.title}</h2>
              <span>{blog.category}</span>
              <span className={styles.blogAuthor}>Written by: {blog.author}</span>
            </div>
          </Link>
        </div>
       ))
       )}
    </div>
    </>
  )
  
}

export default BlogList