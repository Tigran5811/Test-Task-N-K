import React from 'react';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

export const Table = ({
  employeesData, columns, onRowClick,
}) => {
  console.log(employeesData);
  return (
    <table>
      <thead>
        <tr>{columns.map((item) => <th key={item.accessor}>{item.Header}</th>)}</tr>
      </thead>
      <tbody>
        {employeesData?.map((item, index) => (
          <tr
            key={index}
            className={cx({ pointer: Boolean(onRowClick) })}
          >
            {columns.map((columns, i) => {
              if (columns.Header === 'Email') {
                return <td key={i}><a href="mailto:">{item[`col${i + 1}`]}</a></td>;
              }

              return <td key={i}>{item[`col${i + 1}`]}</td>;
            })}
          </tr>
        ))}
      </tbody>
      <tfoot />
    </table>
  );
};
