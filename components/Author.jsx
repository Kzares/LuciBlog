import React from 'react'

function Author({ author }) {
  return (
    <div className="author-card">
      <div className="content">
        <div className="image"><img src={author.photo.url} alt="" /></div>

        <h1> {author.name} </h1>

        <p> {author.bio} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel minima eaque minus? Veniam nisi corrupti veritatis velit, hic odio, quo ab neque a similique harum! </p>
      </div>
    </div>
  )
}

export default Author