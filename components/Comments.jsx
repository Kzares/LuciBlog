import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

function Comments({ slug }) {

  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result))
  }, [])
  console.log(comments)
  return (
    <div className="comments">

      {comments.length > 0 && (
        <div className="content">

          <div className="comments-header">
            {comments.length} {' '} Comments
          </div>

          {comments.map((comment) =>(
            <div className="box" key={comment.createdAt}>
              <h2> <span>{comment.name} </span> {' '} on {' '} {moment(comment.createdAt).format('MMM DD, YYYY')} </h2>
              <p> {comment.comment} lore m ioidsif ja j</p>
            </div>
          ))}

        </div>
      )}
    </div>

  )
}

export default Comments