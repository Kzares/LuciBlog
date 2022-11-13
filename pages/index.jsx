import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { PostCard, Categories, PostWidget, Support, Loader } from '../components'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { getPosts } from '../services'

export default function Home({ posts }) {

  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }

  }


  return (
    <div>
      <Head>
        <title>Demo Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="gallery-container">
        <div className="gallery">


          <div className="content">
            <h2>ready to production</h2>
            <h1>Demo Blog</h1>
            <p>This is a blog demo ready to production, is mounted on next.js and alow awesome features, use a graphQL CMS to the data administration and more, explore by yourself!!!!</p>
          </div>

          <div className="slider">

            <div className="images" ref={scrollRef}>

              {posts.map((image, idx) => (
                <div className="images-card" key={`gallery_image-${idx + 1}`} >
                  <Link href={`/post/${image.node.slug}`} key={image.node.id}><img src={image.node.featuredImage.url} alt="" /></Link>
                </div>
              ))}

            </div>


            <div className="arrows">
              <BsArrowLeftShort className='arrow-icon' onClick={() => scroll('left')} />
              <BsArrowRightShort className='arrow-icon' onClick={() => scroll('right')} />
            </div>

          </div>

        </div>
      </div>

      <div className="container">

        <div class="bgPulse">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>



        <div className="posts-container">
          {posts.map((post, idx) => (<PostCard post={post.node} key={idx} idx={idx} />))}
        </div>

        <div className="recommend">
          <PostWidget />
          <Categories />
          <Support />
        </div>

      </div>


    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}
