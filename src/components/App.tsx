import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchUsers } from "../redux/user/userSlice";
import Layout from "./app/Layout";
import AddPostForm from "./features/posts/AddPostForm";
import EditPostForm from "./features/posts/EditPostForm";
import PostList from "./features/posts/PostList";
import SinglePostPage from "./features/posts/SinglePostPage";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

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
          <Route element={<Layout />} path="/">
            <Route element={<PostList />} index />

            <Route path="post">
              <Route element={<AddPostForm />} index />
              <Route element={<SinglePostPage />} path=":postId" />
              <Route element={<EditPostForm />} path="edit/:postId" />
            </Route>
          </Route>
        </Routes>
      </StyledWrapper>
    </>
  );
};
