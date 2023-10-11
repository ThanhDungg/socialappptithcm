import classNames from 'classnames/bind';
import style from './Avatar.module.scss';

const cx = classNames.bind(style);

function Img({ src }) {
   return <img src={src} className={cx('img')} />;
}

export default Img;
