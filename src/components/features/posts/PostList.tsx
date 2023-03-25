import React, { useEffect, useState } from "react";
import { fetchPosts } from "./postsSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { selectUsers } from "../../../redux/user/userSlice";
import UserRow from "../../app/UserRow";

const PostList = () => {
  const dispatch = useAppDispatch();
  const users = useTypedSelector(selectUsers);

  const [pagination, setPagination] = useState(1);
  const [subsetOfUsers, setSubsetOfUsers] = useState(users.slice(0, 10));

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    const newUsers = users.slice(pagination, pagination + 7);
    setSubsetOfUsers(newUsers);
  }, [pagination]);

  const paginationHandler = (type: string) => {
    if (type === "decrement") {
      setPagination((prevState) => prevState - 1);
    } else if (type === "increment") {
      setPagination((prevState) => prevState + 1);
    }
  };

  return (
    <>
      {subsetOfUsers.map((user) => (
        <UserRow
          userId={user.id}
          userName={user.first_name}
          key={user.id}
        />
      ))}
      <div>
        <button className="paginations" disabled={pagination === 1}onClick={() => paginationHandler("decrement")}>Previous</button>{" "}
        {pagination}{" "}
        <button className="paginations" onClick={() => paginationHandler("increment")}>Next</button>
      </div>
    </>
  );
};

export default PostList;
