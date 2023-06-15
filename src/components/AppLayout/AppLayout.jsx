import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './AppLayout.module.scss';
import { Header } from '../Header/Header';
import Home from '../../Pages/home/Home';
import Employees from '../../Pages/employees/Employees';
import Tasks from '../../Pages/tasks/Tasks';
import { Employee } from '../../Pages/employee/Employee';
import { Loader } from '../Loader/Loader';

const AppLayout = () => (
  <div className={styles.container}>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </main>
    <Loader />
  </div>

);
export default AppLayout;
