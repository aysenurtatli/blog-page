import React from 'react'
import { useContext } from 'react';
import ThemeContext from './ThemeContext'
import BlogList from './BlogList';
import useFetch from './UseFetch';
import Blogs from './BlogsContainer';
function BlogsContainer({blogs}) {
    const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="blog-list">
    {blogs && blogs.length > 0 ?  (<BlogList blogs={blogs}/>) : (<div>No blogs found</div>)}
    </div>
  )
}

export default BlogsContainer