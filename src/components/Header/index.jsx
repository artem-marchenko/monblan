import s from './Header.module.scss';
import DatePicker from 'react-date-picker';
import React, { useState } from 'react';

function Header() {
  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState(new Date());

  return (
    <div className={s.container}>
      <header className={s.header}>
        <img
          className={s.header__logo}
          src='img/Group 1.png'
          alt=''
        />
        <div className={s.info}>
          <div className={s.header__top}>
            <h3 className={s.header__title}>monblanproject</h3>
            <div className={s.start_date}>Start on 17-02-2016</div>
          </div>
          <div className={s.followers}>
            <span>
              <b>870</b> posts
            </span>
            <span>
              <b>11,787</b> followers
            </span>
            <span>
              <b>112</b> following
            </span>
          </div>
          <div className={s.date}>
            <span>Date</span>
            <div>
              <DatePicker onChange={onChange} value={value} />
            </div>
            <div>
              <DatePicker onChange={onChange1} value={value1} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
