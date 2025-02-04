import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext'
import useFetch from './UseFetch';
import FeaturedBlog from './FeaturedBlog';
import Aside from './Aside';
import styles from './styles/topSection.module.css'

function TopSection({selectedCategory, onCategorySelect}) {
  const { isDarkMode } = useContext(ThemeContext);
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  return (
    <div className={styles.content}>
    {blogs && blogs.length > 0 && (
     <FeaturedBlog blog={blogs[0]}/>
    )}
    <Aside selectedCategory={selectedCategory} onCategorySelect={onCategorySelect}/>
    </div>
  )
}

export default TopSection