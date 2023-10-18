import Comment from '../../components/Comment';
import LoadMoreRepCmt from '../../components/LoadMoreRepCmt';

function CommentHasRepCmt({ comment, post }) {
   return (
      <li class="comment-item">
         <Comment comment={comment} post={post} />
         <LoadMoreRepCmt />
      </li>
   );
}

export default CommentHasRepCmt;
