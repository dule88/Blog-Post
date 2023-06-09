import React, { useEffect, useState } from "react";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import UserRow from "../../../redux/user/UserRow";
import { selectUsers } from "../../../redux/user/userSlice";
import { fetchPosts } from "./postsSlice";

const PostList = () => {
  const dispatch = useAppDispatch();
  const [pagination, setPagination] = useState(1);
  const users = useTypedSelector(selectUsers).slice(
    (pagination - 1) * 10,
    pagination * 10,
  );
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const paginationHandler = (type: string) => {
    if (type === "decrement") {
      setPagination((prevState) => prevState - 1);
    } else if (type === "increment") {
      setPagination((prevState) => prevState + 1);
    }
  };

  return (
    <>
      {users.map((user) => (
        <UserRow key={user.id} userId={user.id} userName={user.first_name} />
      ))}
      <div>
        <button
          className="paginations"
          disabled={pagination === 1}
          onClick={() => paginationHandler("decrement")}
        >
          Previous
        </button>{" "}
        {pagination}{" "}
        <button
          className="paginations"
          onClick={() => paginationHandler("increment")}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PostList;
