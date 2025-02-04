import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './UseFetch';
import Spinner from './Spinner';
import styles from './styles/BlogDetails.module.css'

function BlogDetails() {
    const { id } = useParams();
    const { data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }
  return (
    <div className={styles.blogDetails}>
        { isPending && <Spinner/> }
        { error && <div>{error}</div> }
        { blog && (
            <article>
                <h2>{blog.title}</h2>
                <span className={styles.blogCategory}>{blog.category}</span>
                <div className={styles.blogImage}>
                    <img src={blog.image} alt="" />
                </div>
                <span className={styles.blogDate}>{blog.date}</span>
                <span className={styles.blogAuthor}>Written by {blog.author}</span>
                <div>
                    <p>{blog.body}</p>
                </div>
                <button onClick={handleClick}>delete</button>
            </article>
        )}
    </div>
  )
}

export default BlogDetails