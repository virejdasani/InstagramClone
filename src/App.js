import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {

  const[posts, setPosts] = useState([
    {username: "virejdasani",
     caption: "This is a caption",
     imageUrl: "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"
    },

    {username: "jetbrains",
     caption: "Caption",
     imageUrl: "https://xpertlab.com/wp-content/uploads/2020/01/pyCharm.png"
    }
    
  ]);

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
