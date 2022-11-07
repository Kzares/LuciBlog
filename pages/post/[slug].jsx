import React from 'react'
import { useRouter } from 'next/router';

import {getPosts, getPostDetails} from '../../services'
import {PostDetail,Support, Categories, PostWidget ,Author,Comments, CommentsForm, Loader} from '../../components'

function PostDetails({post}) {
    

    const router = useRouter();


    if (router.isFallback) {
        return <Loader />;
    }

  return (
    <div className="container">
        <div class="bgPulse">
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>

        <div className="posts-container">
            <PostDetail post={post} />
            <Support/>
            <Author author= {post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
        </div>

        <div className="recommend">
            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug )} />
            <Categories/>
            <Support/>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}){
    const data = await getPostDetails(params.slug)
    
    return {
      props: { post: data}
    }
}
export async function getStaticPaths(){
    const posts = await getPosts()

    return{
        paths: posts.map(({node:{slug}}) => ({params: {slug}})),
        fallback:true
    }
}
  