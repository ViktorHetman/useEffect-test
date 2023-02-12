import React from 'react'

function Post({userId, title, body}) {
  return (
    <div>
        <small>USER ID: {userId}</small>
        <h1>{title}</h1>
        <h3>{body}</h3>
    </div>
  )
}

export default Post