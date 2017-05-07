// @flow
import React from 'react'

/* eslint-disable */
type Post = {
  title: string,
  id: string,
  preview: string,
  date: Date
}
/* eslint-enable */

const PostPreview = ({post}: {post: Post}) => (
  <li>
    <h3 id={post.id}>{post.title}</h3>
    <div className='info'>
      <span>{post.date.toDateString()}</span>
    </div>
    <p>
      {post.preview.length > 140
        ? `${post.preview.slice(0, 139)}...`
        : post.preview}
    </p>
  </li>
)

type BlogPreviewProps = {
  headline?: string,
  posts: Array<Post>,
  numPosts?: number
}

const BlogPreview = (props: BlogPreviewProps) => (
  <section>
    <h2>{props.headline || 'Recent posts'}</h2>
    <ul>
      {props.posts
        .slice(0, props.numPosts || 5)
        .map(post => (
          <PostPreview key={`post-${post.title.toLowerCase()}`} post={post} />
        ))}
    </ul>
  </section>
)

export default BlogPreview
