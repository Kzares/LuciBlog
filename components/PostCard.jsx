import React from 'react'
import moment from 'moment'
import { GoCalendar } from 'react-icons/go'
import Link from 'next/link'
import { HiOutlineArrowCircleDown } from 'react-icons/hi'
function Postcard({ post }) {

  console.log(post)
  return (
    <div className="post">

      <div className="content">
        <div className="image">
          <img src={post.featuredImage.url} alt={post.title} />
        </div>

        <h1>{post.title} </h1>

        <div className="details">

          <div className="author">
            <img src={post.author.photo.url} alt="" />
            <h2> {post.author.name} </h2>
          </div>

          <div className="date"> <GoCalendar className='icon' /> {moment(post.createdAt).format('MMM DD, YYYY')} </div>

        </div>
        <div className="excerpt">{post.excerpt} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio odit explicabo accusantium vitae dicta doloribus fuga error quod iure?</div>
               
         <div className="read-more"><Link href={`/post/${post.slug}`}> Continue Reading </Link> <HiOutlineArrowCircleDown className='icon' /> </div>
        
      </div>
    </div>
  )
}

export default Postcard