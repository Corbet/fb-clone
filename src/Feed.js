import React, {useEffect, useState} from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import "./Feed.css"
import db from "./firebase"
import { collection,
         query,
         orderBy,
         onSnapshot} from 'firebase/firestore'

function Feed() {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    const postsCol = collection(db, 'posts')
    const orderedCol = query( postsCol, orderBy('timestamp', 'desc') )

    onSnapshot(orderedCol, (q) => {
      setPosts(q.docs.map( (doc) => 
        console.log("doc.id")
        ( {id: doc.id, data: doc.data()}) )
      )
    })
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />

      ))}
    </div>
  )
}

export default Feed