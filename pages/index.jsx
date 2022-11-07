import Head from 'next/head'
import { PostCard, Categories, PostWidget, Support, Loader } from '../components'
import { getPosts } from '../services'

export default function Home({posts}) {

  
  return (
    <div>
      <Head>
        <title>Demo Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <Support/>
        </div>

      </div>


    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || []
  
  return {
    props: {posts}
  }
}
