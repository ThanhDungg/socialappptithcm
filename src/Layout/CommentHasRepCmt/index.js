import Comment from '../../components/Comment';
import LoadMoreRepCmt from '../../components/LoadMoreRepCmt';

function CommentHasRepCmt() {
   return (
      <li class="comment-item">
         <Comment />
         <LoadMoreRepCmt />
      </li>
   );
}

export default CommentHasRepCmt;
