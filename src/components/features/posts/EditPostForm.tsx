import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { editBlogPost } from "../../../data/data";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { RootState } from "../../../redux/store";
import { fetchPosts, selectPostById } from "./postsSlice";

const EditPostForm = () => {
  const dispatch = useAppDispatch();

  const params = useParams();
  const postId = params.postId ?? "";
  const navigate = useNavigate();

  const post = useSelector((state: RootState) => selectPostById(state, postId));

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const onTitleChanged = (event: React.FormEvent<HTMLInputElement>) =>
    setTitle((event.target as HTMLInputElement).value);
  const onContentChanged = (event: React.FormEvent<HTMLTextAreaElement>) =>
    setContent((event.target as HTMLInputElement).value);

  const onSavePostClicked = async () => {
    if (title && content) {
      const payload = {
        id: postId,
        userId: post.userId,
        title,
        body: content,
        datePosted: new Date().toISOString(),
      };
      await editBlogPost(postId, payload);
      dispatch(fetchPosts());

      navigate(`/post/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          id="postTitle"
          name="postTitle"
          onChange={onTitleChanged}
          type="text"
          value={title}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          onChange={onContentChanged}
          value={content}
        />
        <button onClick={onSavePostClicked} type="button">
          Save Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
