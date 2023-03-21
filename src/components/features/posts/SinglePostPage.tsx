import React from 'react';
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
// import ReactionButtons from "./ReactionButtons";
import { useParams } from 'react-router-dom';
import { RootState } from '../../../redux/store';




const SinglePostPage = () => {
    const params = useParams();
   const postId = params.postId ?? "";

    const post = useSelector((state: RootState) => 
      selectPostById(state, postId)
  );

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                {/* <Link to={`/post/edit/${post.id}`}>Edit Post</Link> */}
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.datePosted} />
            </p>
            {/* <ReactionButtons post={post} /> */}
        </article>
    )
}

export default SinglePostPage;