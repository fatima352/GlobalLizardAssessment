import React from 'react'
import './PostCard.css'
/*
this component handle only display of posts getted from the ListPosts compnenent
*/

const PostCard = ({id, title, date, author}) => {
  return (
      <div className="postCard">
        <h2 className="title">{title}</h2>
        <p className="date">{date}</p>
        <div className="author">
          <img src={author.avatar} alt={author.name} />
           <p>{author.name}</p>
        </div>

      </div>
  )
}

export default PostCard
