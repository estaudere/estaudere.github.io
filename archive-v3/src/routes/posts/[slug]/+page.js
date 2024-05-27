export const load = async ({ data }) => {
  // load the markdown file based on slug
  const component = await import(`../../../lib/private_posts/${data.post.slug}.md`);

  console.log("hello");
  console.log(component);

  return {
        post: data.post,
        component: component.content,
        layout: {
          fullWidth: true,
        },
  };
};