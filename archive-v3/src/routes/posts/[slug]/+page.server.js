import { posts } from '$lib/server/posts';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const { slug } = params;

    // get post with metadata
    const post = posts.find((post) => slug === post.slug);

    if (!post) {
        throw error(404, 'Post not found');
    };

    return {
        post,
    };
};