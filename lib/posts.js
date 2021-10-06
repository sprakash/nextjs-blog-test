export async function useBlogger()  {
  const API_URL = `https://www.googleapis.com/blogger/v3/blogs/6005036060428034474/posts`
  const blogURL = `${API_URL}?key=${process.env.API_KEY}`;
  
  const res = await fetch(blogURL);
  const posts = await res.json();

  return {
    props: { posts }
  }

}

export async function getPathIds(){
  
   const bloggerData =  await useBlogger();

    return bloggerData.props.posts.items.map(post => {
      return {
        params: { 
          id: post.id
        }
      }
    });

}

  export async function getPostData(id) {
   
    // Combine the data with the id
    const bloggerData = await useBlogger();
    const blogContent = bloggerData.props.posts.items.filter(blog => blog.id === id);

    return {
      id,
      blogContent
    }
  }

  
