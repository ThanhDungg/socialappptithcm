import Comment from '../../components/Comment';

function CommentNoRepCmt({ comment, post }) {
   return (
      <li class="comment-item" style={{ listStyle: 'none' }}>
         <Comment comment={comment} post={post} />
      </li>
   );
}

export default CommentNoRepCmt;
