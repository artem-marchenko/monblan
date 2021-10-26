import s from './CardList.module.scss';

function CardList(props) {
  const {
    img,
    likes_today,
    comments_today,
    likes_date,
    comments_date,
    upload_date,
  } = props;

  return (
    <div className={s.card}>
      <img src={img} width='100px' height='100px' alt='' />

      <div className={s.card__today}>
        <h5>Today</h5>
        <div className={s.likes}>
          <div className={s.icons}>
            <svg
              width='15px'
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='heart'
              class='svg-inline--fa fa-heart fa-w-16'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
              ></path>
            </svg>
            <span>{likes_today}</span>
          </div>

          <div className={s.icons}>
            <svg
              width='15px'
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='comment-alt'
              class='svg-inline--fa fa-comment-alt fa-w-16'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z'
              ></path>
            </svg>
            <span>{comments_today}</span>
          </div>
        </div>
      </div>

      <div className={s.card__date}>
        <h5>09-08-2016</h5>
        <div className={s.likes}>
          <div className={s.icons}>
            <svg
              width='15px'
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='heart'
              class='svg-inline--fa fa-heart fa-w-16'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
              ></path>
            </svg>
            <span>{likes_date}</span>
          </div>

          <div className={s.icons}>
            <svg
              width='15px'
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='comment-alt'
              class='svg-inline--fa fa-comment-alt fa-w-16'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z'
              ></path>
            </svg>
            <span>{comments_date}</span>
          </div>
        </div>
      </div>

      <div className={s.card__upload}>
        <span>Image upload</span>
        <span>{upload_date}</span>
      </div>
    </div>
  );
}

export default CardList;
