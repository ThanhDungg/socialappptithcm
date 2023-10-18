import Comment from '../../components/Comment';

function CommentNoRepCmt({ comment, post }) {
   return (
      <li class="comment-item">
         <Comment comment={comment} post={post} />
      </li>
   );
}

export default CommentNoRepCmt;
