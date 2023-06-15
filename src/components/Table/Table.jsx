import React from 'react';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

export const Table = ({
  employeesData, columns, onRowClick, deleteEmployee, openModalUpdate,
}) => (
  <table>
    <thead>
      <tr>{columns.map((cole, i) => <th key={i}>{cole.Header}</th>)}</tr>
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
            if (columns.Header === 'Delete employee') {
              return (
                <td key={i}>
                  <button onClick={() => {
                    deleteEmployee(item.col5);
                  }}
                  >
                    Delete employee
                  </button>
                </td>
              );
            }
            if (columns.Header === 'Update employee') {
              return (
                <td key={i}>
                  <button onClick={() => {
                    openModalUpdate(item);
                  }}
                  >
                    Update employee
                  </button>
                </td>
              );
            }

            return <td key={i}>{item[`col${i + 1}`]}</td>;
          })}
        </tr>
      ))}
    </tbody>
    <tfoot />
  </table>
);
