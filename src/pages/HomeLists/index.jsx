import { Link } from 'react-router-dom';
import s from './HomeLists.module.scss';
import CardList from '../../components/CardList';
import data from '../../data';

function HomeLists() {
  return (
    <main className={s.main}>
      <div className='main-content container'>
        <div className={s.tails}>
          <Link className={s.tail_button} to='/'>
            <svg
              width='30px'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='buromobelexperte'
              class='svg-inline--fa fa-buromobelexperte fa-w-14'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M0 32v128h128V32H0zm120 120H8V40h112v112zm40-120v128h128V32H160zm120 120H168V40h112v112zm40-120v128h128V32H320zm120 120H328V40h112v112zM0 192v128h128V192H0zm120 120H8V200h112v112zm40-120v128h128V192H160zm120 120H168V200h112v112zm40-120v128h128V192H320zm120 120H328V200h112v112zM0 352v128h128V352H0zm120 120H8V360h112v112zm40-120v128h128V352H160zm120 120H168V360h112v112zm40-120v128h128V352H320z'
              ></path>
            </svg>
          </Link>
          <Link className={s.tail_button} to='/lists'>
            <svg
              width='30px'
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='list'
              class='svg-inline--fa fa-list fa-w-16'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'
              ></path>
            </svg>
          </Link>
        </div>
        <div className={(s.cards, s.card_container)}>
          {data.map((obj) => (
            <CardList key={data.likes_today} {...obj} />
          ))}
        </div>
      </div>
      <button className={s.more}>Load more</button>
    </main>
  );
}

export default HomeLists;
