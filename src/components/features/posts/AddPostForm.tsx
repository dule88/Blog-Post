import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectUsers } from "../../../redux/user/userSlice";
import { addBlogPost } from "../../../data/data";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom';

export const AddPostForm = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState<number>(0);
  
  const users = useSelector(selectUsers);

  const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) =>
    setTitle((e.target as HTMLInputElement).value);
  const onContentChanged = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setContent((e.target as HTMLInputElement).value);
    const onAuthorChanged = (e: React.FormEvent<HTMLSelectElement>) =>
    setUserId(Number((e.target as HTMLInputElement).value));

  const onSavePostClicked = async () => {

    const payload = {
      id: nanoid(),
      userId,
      title,
      body: content,
      datePosted: new Date().toISOString()
    }
    try {
    const res = await addBlogPost(payload);
    navigate('/')
  } catch (error) {
    console.log(error);
    
  }
  };


  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    
    <option key={user.id} value={user.id}>
      {user.first_name}
    </option>
  ));
  
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
