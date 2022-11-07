import React,{useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import {getRecentPosts,getSimilarPosts} from '../services'
function PostWidget({ categories, slug }) {

  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug){
      getSimilarPosts(categories,slug)
        .then((result) => setRelatedPosts(result))
    }else{
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug]);
  console.log(relatedPosts)

  return (
    <div className="post-widget">
      <div className="content">
        <h1> {slug? 'Similar Posts' : 'Recents Posts' } </h1>
        {relatedPosts.map((post) =>{
         return ( 
         <div className="box" key={post.title}>

         <div className="image">
           <img src={post.featuredImage.url} alt="" />
         </div>

         <h3>
           <span> {moment(post.createdAt).format('MMM DD, YYYY')} </span>
            <Link href={`/post/${post.slug}`}  key={post.title} className='p' > 
             {post.title} 
            </Link>
         </h3>

       </div>)
        })}
      </div>
    </div>
  )
}

export default PostWidget