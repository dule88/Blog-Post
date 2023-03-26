import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { deleteBlogPost } from "../../../data/data";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { RootState } from "../../../redux/store";
import PostAuthor from "./PostAuthor";
import { fetchPosts, selectPostById } from "./postsSlice";
import TimeAgo from "./TimeAgo";

const SinglePostPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId ?? "";

  const post = useSelector((state: RootState) => selectPostById(state, postId));

  const deletePostHandler = async (id: string) => {
    await deleteBlogPost(id);
    dispatch(fetchPosts());
    navigate("/");
  };

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title.substring(0, 30)}</h2>
      <p>{post.body.substring(0, 200)}</p>
      <p className="postCredit">
        <Link className="editButton" to={`/post/edit/${post.id}`}>
          Edit Post
        </Link>
        <button
          className="deletePostButton"
          onClick={() => deletePostHandler(post.id)}
          type="button"
        >
          Delete post
        </button>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.datePosted} />
      </p>
      <button className="backButton" onClick={() => navigate("/")}>
        BACK
      </button>
    </article>
  );
};

export default SinglePostPage;
