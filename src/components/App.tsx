import React, { useEffect } from "react";
import styled from "styled-components";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers, selectUsers } from "../redux/user/userSlice";

import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./app/Layout";
import EditPostForm from "./features/posts/EditPostForm";
import { Routes, Route } from "react-router-dom";

const StyledWrapper = styled.div`
  padding: 24px;
`;

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <StyledWrapper>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PostList />} />

            <Route path="post">
              <Route index element={<AddPostForm />} />
              <Route path=":postId" element={<SinglePostPage />} />
              <Route path="edit/:postId" element={<EditPostForm />} />
            </Route>
          </Route>
        </Routes>
      </StyledWrapper>
    </>
  );
};
