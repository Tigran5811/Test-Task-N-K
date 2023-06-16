import React from 'react';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import { Button } from '../Button/Button';

const cx = classNames.bind(styles);

export const Table = ({
  columns, onRowClick, deleteId, openModalUpdate, onEmployeeRowClick, data,
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
              return <td key={i}><a href="mailto:">{item[`col${i + 1}`]}</a></td>;
            }
            if (columns.Header === 'Delete') {
              return (
                <td key={i}>
                  <Button
                    text="Delete"
                    onClick={() => {
                      deleteId(item.col5);
                    }}
                  />
                </td>
              );
            }
            if (columns.Header === 'Update') {
              return (
                <td key={i}>
                  <Button
                    onClick={() => {
                      openModalUpdate(item);
                    }}
                    text="Update"
                  />
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
