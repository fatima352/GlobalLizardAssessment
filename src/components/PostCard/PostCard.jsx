import React from 'react'
import './PostCard.css'
/*
this component handle only the display of posts getted from the ListPosts compnenent
*/

const PostCard = ({id, title, date, author}) => {
  return (
    <div key={id} className="postCard">
      <h1 className="title">titre ; {title}</h1>
      <p className="date"> date : {date}</p>
      <p className="author"> author : {author.name}</p>
      <img src={author.avatar} alt={author.name} />
      <button className="btn">more details</button>
    </div>
  )
}

export default PostCard
