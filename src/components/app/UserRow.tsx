import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { deleteBlogPost, deleteUser } from "../../data/data";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUsers } from "../../redux/user/userSlice";
import { fetchPosts, selectAllPosts } from "../features/posts/postsSlice";

interface User {
  userId: number;
  userName: string;
}

const UserRow = ({ userId, userName }: User) => {
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState(false);
  const [userPosts, setUserPosts] = useState<
    {
      id: string;
      userId: number;
      title: string;
      body: string;
      datePosted: string;
    }[]
  >([]);

  const posts = useTypedSelector(selectAllPosts);


  const fetchUserPosts = () => {
    if (!expanded) {
      const data = posts.filter((post) => post.userId === userId);
      setUserPosts(data);
      setExpanded(true);
    }
  };


  const deleteUserHandler = async (userId: number) => {
    await deleteUser(userId);
    dispatch(fetchUsers());
  };

  const deletePostHandler = async (id: string) => {
    await deleteBlogPost(id);
    dispatch(fetchPosts());
    const newUserPosts = userPosts.filter((post) => post.id !== id);
    setUserPosts(newUserPosts);
  };

  return (
    <>
      <div className="accordian">
        <details onClick={fetchUserPosts}>
          <summary>{userName}</summary>
          {userPosts.map((post) => (
            <tr key={post.id}>
              <td><Link className="postTitle" to={`/post/${post.id}`}>
                {post.title.substring(0, 10)}...
              </Link>
              </td>
              <td className="test">
                <button className="deletePostButton" onClick={() => deletePostHandler(post.id)}>Delete post</button>
              </td>
              <td className="test"><button className="deleteUserButton" onClick={() => deleteUserHandler(userId)}>Delete user</button></td>
            </tr>
          ))}
        </details>
      </div>
    </>
  );
};

export default UserRow;
