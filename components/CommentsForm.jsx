import React, { useRef, useState, useEffect } from 'react'
import { HiOutlineArrowCircleDown } from 'react-icons/hi'
import { submitComment } from '../services'
/* 
<div className="localSave">
          <input type="checkbox" ref={storeDataEl} id='storeData' name='storeData' value='true' />
          <label htmlFor="storeData">Save my name and email for next time I comment</label>
        </div>
*/
function CommentsForm({ slug }) {


  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    nameEl.current.value = window.localStorage.getItem('email');
  }, [])

  const handleCommentSubmission = () => {
    setError(false)
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name: name, email: email, comment: comment, slug: slug
    }

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      })
  }

  return (
    <div className="comment-form">


      <div className="content">
        <h1>Leave a Reply</h1>


        <div className="textarea">
          <textarea ref={commentEl} name="content" placeholder='Comment' cols="20" rows="10" />
        </div>


        <div className="inputs">
          <input type="text" ref={nameEl} placeholder='Name' name='name' />
          <input type="text" ref={emailEl} placeholder='email' name='email' />
        </div>



        {error && <p>All errors are required</p>}

        <div className='btn' onClick={handleCommentSubmission}>
          Post Comment <HiOutlineArrowCircleDown className='icon' />
        </div>

        {showSuccessMessage && <span>Comment submited for review</span>}
      </div>

    </div>
  )
}

export default CommentsForm