import React, {useEffect, useState}from 'react'
import Post  from '../Post/Post'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function PostsHolder() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
      const fetchData = async () => {               // Structure of getting array of objects from server and catching mistakes 
        try {                                       // Using useEffect to avoid loop rerendering 
            const res = await fetch(API_URL)        // We can't get async/await as a first argument of useEffect cause it returs promise, 
            const posts = await res.json()          // but the function in first argument of hook useEffect should return undefiend or 
            setPosts(posts)                         // other function, thats why i assign the async/await to arrow func fetchData, 
        } catch(error) {                            // or we can use IIFE 
            setError(error.message)
        }
      }
       fetchData() 
    
    }, /* array of dependencies*/[])  

    if (error) {
        return <h1>Error: {error}</h1>
    }
                                                    /*  In React each child in a list should have a unique "key" prop,  also 
                                                        decomposing obj*/
  return (                                             
    <div>                                              
        {posts.map((post)=>{
            return <Post key={post.id} {...post}/>    
        })}                                                                                  
    </div>
  )
}

export default PostsHolder