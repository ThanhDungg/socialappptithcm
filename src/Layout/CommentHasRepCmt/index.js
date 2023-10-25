import Comment from '../../components/Comment';
import LoadMoreRepCmt from '../../components/LoadMoreRepCmt';

function CommentHasRepCmt({ comment, post }) {
   return (
      <li class="comment-item" style={{ listStyle: 'none' }}>
         <Comment comment={comment} post={post} />
      </li>
   );
}

export default CommentHasRepCmt;
