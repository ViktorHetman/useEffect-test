import React from 'react'
import styles from './Post.module.css'

function Post({userId, title, body}) {
  return (
    <div className={styles.post}>
        <small>USER ID: {userId}</small>
        <h1>{title}</h1>
        <h3>{body}</h3>
    </div>
  )
}

export default Post