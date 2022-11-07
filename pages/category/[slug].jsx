import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader,PostWidget } from '../../components';

const CategoryPost = ({ posts }) => {
    const router = useRouter();


    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div>
            <div className="container">

                <div class="bgPulse">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </div>

                <div className="posts-container">
                    {posts.map((post, idx) => (<PostCard post={post.node} key={idx} />))}
                </div>

                <div className="recommend">
                    <PostWidget />
                    <Categories />
                </div>

            </div>

        </div>
    );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
    const posts = await getCategoryPost(params.slug);

    return {
        props: { posts },
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
}