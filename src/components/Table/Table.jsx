import React from 'react';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

export const Table = ({
  columns, onRowClick, deleteId, openModalUpdate, onEmployeeRowClick, page,
}) => (
  <table>
    <thead>
      <tr>{columns.map((cole, i) => <th key={i}>{cole.Header}</th>)}</tr>
    </thead>
    <tbody>
      {page?.map((item, index) => (
        <tr key={index}>
          {columns.map((columns, i) => {
            if (columns.Header === 'Email') {
              return <td key={i}><a href="mailto:">{item[`col${i + 1}`]}</a></td>;
            }
            if (columns.Header === 'Delete') {
              return (
                <td key={i}>
                  <button onClick={() => {
                    deleteId(item.col5);
                  }}
                  >
                    Delete
                  </button>
                </td>
              );
            }
            if (columns.Header === 'Update') {
              return (
                <td key={i}>
                  <button onClick={() => {
                    openModalUpdate(item);
                  }}
                  >
                    Update
                  </button>
                </td>
              );
            }

            return (
              onEmployeeRowClick ? (
                <td
                  key={i}
                  role="button"
                  className={cx({ pointer: Boolean(onRowClick) })}
                  onClick={() => {
                    onEmployeeRowClick(item.col5);
                  }}
                >
                  {item[`col${i + 1}`]}
                </td>
              ) : (
                <td
                  key={i}
                  className={cx({ pointer: Boolean(onRowClick) })}
                >
                  {item[`col${i + 1}`]}
                </td>
              )
            );
          })}
        </tr>
      ))}
    </tbody>
  </table>
);
