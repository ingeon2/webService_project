import styled from "styled-components";
import { useState, useEffect } from "react";
import Comment from "./Comment";
import groupCommentsAndReplies from "../../util/groupCommentsAndReplies";
import { commentSuccess } from "../../util/toastify";

interface CommentListProps {
   comments?: any[];
   memberId: number;
   boardId: number;
}

function CommentList({
   comments: initialComments = [],
   memberId,
   boardId,
}: CommentListProps) {
   const [comments, setComments] = useState(
      groupCommentsAndReplies(initialComments || [])
   );

   const [selectedCommentId, setSelectedCommentId] = useState<number | null>(
      null
   );

   useEffect(() => {
      if (initialComments) {
         setComments(initialComments);
      }
   }, [initialComments]);

   const handleReplySubmit = () => {
      commentSuccess();
   };

   const handleReplyClick = (commentId: number | null) => {
      setSelectedCommentId(commentId);
   };

   return (
      <CommentListContainer>
         <ul className="comments">
            {comments.map((comment) => {
               const isReplySelected = selectedCommentId === comment.commentId;
               return (
                  <Comment
                     key={comment.commentId}
                     comment={comment}
                     handleReplySubmit={handleReplySubmit}
                     handleReplyClick={handleReplyClick}
                     isReplySelected={isReplySelected}
                     memberId={memberId}
                     boardId={boardId}
                  />
               );
            })}
         </ul>
      </CommentListContainer>
   );
}

export default CommentList;

export const CommentListContainer = styled.div`
   display: flex;
   flex-direction: column;

   .comments {
      padding: 0;
   }
`;
