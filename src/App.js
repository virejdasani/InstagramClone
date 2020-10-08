import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {

  const[posts, setPosts] = useState([]);

// This is to fetch data from firebase
  // This is excecuted every time a new post is added
  useEffect(() => {
    
    db.collection('posts').onSnapshot(snapshot => {

      // This is like a loop to go over all the posts in firebase
      setPosts(snapshot.docs.map(doc => doc.data()))
    
    })
    
  }, [])

// App Layout
  return (
    <div className="app">
      <div className="app__header">
        {/* Instagram Logo */}
        <div className="app__imageBorder">
            <img 
            className="app__headerImage" 
            src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""/>
        </div>
        <h1>This is an Instagram Clone, Made by Virej Dasani</h1>
        <h3>Github: virejdasani</h3>
        <h3>Instagram: _virej_</h3>

        {
          posts.map(post => (
            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          ))
        }
        
      </div>

      
      

    </div>
    
  );
}

export default App;
