import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

export const Pagination = ({ data, pageNext }) => {
  const pages = Math.ceil(data.length / 10);
  const [active, setActive] = useState(false);

  const isActive = () => {
    setActive(true);
  };

  const arr = [];
  for (let i = 1; i <= pages; i++) {
    arr.push(i);
  }

  return (
    <div className={styles.page}>
      {arr.map((item, i) => (
        <div
          className={cx('number', { active })}
          key={i}
          role="button"
          onClick={() => {
            pageNext(item);
            isActive();
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
