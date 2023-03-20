// import React from 'react';
// import { Post } from "./Post";
// import { useDispatch } from "react-redux";
// import { reactionAdded } from "./postsSlice";

// const reactionEmoji = {
//     thumbsUp: "👍",
//     heart: "❤️",
// };

// interface Props {
//     post: Post;
// }

// export const ReactionButtons = ({ post }: Props) => {
//     const dispatch = useDispatch();

//     const reactionButtons = Object.entries(reactionEmoji).map(
//         ([name, emoji]) => {
//             return (
//                 <button
//                     key={name}
//                     type="button"
//                     className="reactionButton"
//                     onClick={() =>
//                         dispatch(
//                             reactionAdded({ postId: post.id, reaction: name })
//                         )
//                     }
//                 >
//                     {emoji} {post.reactions[name]}
//                 </button>
//             );
//         }
//     );

//     return <div>{reactionButtons}</div>;
// };
