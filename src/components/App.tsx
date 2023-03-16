import React, { useEffect } from "react";
import styled from "styled-components";



import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers, selectUsers } from "../redux/user/userSlice";
import { Navbar } from "./app/Navbar";
import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";





const StyledWrapper = styled.div`
  padding: 24px;
`;

export const App = () => {
  const dispatch = useAppDispatch();
  const users = useTypedSelector(selectUsers);
  const subsetOfUsers = users.slice(0, 10); // TODO: Remove this when you have found a better way to not show all users at once

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Navbar />
      <StyledWrapper>
        <GlobalStyles />
        <AddPostForm/>
        <PostList/>
        {/* <h1>NaviPartner Tech Test</h1>

        <h2>Create your app here!</h2>
        <p>Let's get you started:</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>IP Address</th>
            </tr>
          </thead>
          <tbody>
            {subsetOfUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.ip_address}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </StyledWrapper>
    </>
  );
};
