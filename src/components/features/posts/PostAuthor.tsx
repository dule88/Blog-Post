import React from "react";
import { useSelector } from "react-redux";

import { selectUsers } from "../../../redux/user/userSlice";

interface PostAuthorProps {
  userId: number | undefined;
}

const PostAuthor = ({ userId }: PostAuthorProps) => {
  const users = useSelector(selectUsers);

  const author = users.find((user) => user.id == userId);

  return (
    <span style={{ marginLeft: "0.5rem" }}>
      by {author ? author.first_name : "Unknown author"}
    </span>
  );
};

export default PostAuthor;
