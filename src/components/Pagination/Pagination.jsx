import React from 'react';
import styles from './Pagination.module.scss';

export const Pagination = ({ data, pageNext }) => {
  const pages = Math.ceil(data.length / 10);
  const arr = [];
  for (let i = 1; i <= pages; i++) {
    arr.push(i);
  }

  return (
    <div className={styles.page}>
      {arr.map((item, i) => (
        <div key={i} role="button" onClick={() => pageNext(item)}>{item}</div>))}
    </div>
  );
};
