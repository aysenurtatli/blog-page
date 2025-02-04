import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ThemeContext from './ThemeContext'
import useFetch from './UseFetch';
import Spinner from './Spinner';
import TopSection from './TopSection';
import BlogsContainer from './BlogsContainer';

function Home() {
  const { isDarkMode } = useContext(ThemeContext);
  const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);

  const filteredBlogs = selectedCategory === 'All' ? blogs : blogs?.filter((blog) => blog.category === selectedCategory)
  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <Spinner/>}
       <TopSection selectedCategory={selectedCategory} onCategorySelect={(category) => setSelectedCategory(category)}/>
        <BlogsContainer blogs={filteredBlogs}/>   
    </div>
  )
}

export default Home