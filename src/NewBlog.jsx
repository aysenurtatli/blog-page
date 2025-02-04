import React, { useState } from 'react'
import { useContext } from 'react';
import ThemeContext from './ThemeContext'
import { useNavigate } from 'react-router-dom';
import styles from './styles/newBlog.module.css'
function NewBlog() {
  const { isDarkMode } = useContext(ThemeContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario')
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState('technology')
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date().toLocaleDateString();
        console.log(date)
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader.result);
            const blog = {title, body, image : reader.result, author, date, category};
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:  JSON.stringify(blog),
            }).then(() => {
                console.log('new blog added');
                setIsPending(false);
                navigate('/')
            })
            console.log(JSON.stringify(blog))
        }
        reader.readAsDataURL(image);
        
       setIsPending(true);
    }

    return (
        <div className={styles.create}>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text"
                required
                value={title}
                className={`${isDarkMode ? styles.dark : styles.light}`}
                onChange={(e) => setTitle(e.target.value)} 
                />
                <label>Blog Body:</label>
                <textarea 
                    rows={25}
                    value={body}
                    className={`${isDarkMode ? styles.dark : styles.light}`}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    className={`${isDarkMode ? styles.dark : styles.light}`}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <label>Category:</label>
                <select
                    value={category}
                    className={`${isDarkMode ? styles.dark : styles.light}`}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Technology">Technology</option>
                    <option value="Food">Food</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Music">Music</option>
                    <option value="Sports">Sports</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Finance">Finance</option>
                    <option value="Movies">Movies</option>
                    <option value="Art and design">Art and design</option>
                    <option value="Photography">Photography</option>
                </select>
                <label>Upload an image</label>
                <input 
                type="file"
                accept='image/*'
                className={`${isDarkMode ? styles.dark : styles.light}`}
                required
                onChange={(e) => setImage(e.target.files[0])} />
                {  !isPending && <button>Add Blog</button>}
                {  isPending && <button disabled>Adding Blog...</button>}

            </form>
        </div>
    )
}

export default NewBlog