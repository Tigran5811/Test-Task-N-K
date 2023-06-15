import React from 'react';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

export const Table = ({
  data, columns, onRowClick, deleteId, openModalUpdate, onEmployeeRowClick,
}) => (
  <table>
    <thead>
      <tr>{columns.map((cole, i) => <th key={i}>{cole.Header}</th>)}</tr>
    </thead>
    <tbody>
      {data?.map((item, index) => (
        <tr key={index}>
          {columns.map((columns, i) => {
            if (columns.Header === 'Email') {
              return <td><a href="mailto:">{item[`col${i + 1}`]}</a></td>;
            }
            if (columns.Header === 'Delete') {
              return (
                <td>
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
                <td>
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
              <td
                role="button"
                className={cx({ pointer: Boolean(onRowClick) })}
                onClick={() => {
                  onEmployeeRowClick(item.col5);
                }}

              >
                {item[`col${i + 1}`]}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
    <tfoot />
  </table>
);
