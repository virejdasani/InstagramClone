import React from 'react'
import './Post.css'; 
import Avatar from '@material-ui/core/Avatar';


function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                {/* profile picture */}
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src="/images/profile/virejdasani.jpg"/> 
                {/* Username above post */}
                <h3>{username}</h3>
            </div>    
            {/* Post */}
                <img 
                className="post__image" 
                src={imageUrl} 
                alt="logo"/>
            {/* Username: caption */}
                <h4 className="post__text"><strong>{username}</strong>: {caption}</h4>
        </div>
    )
}

export default Post
