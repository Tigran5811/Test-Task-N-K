import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './AppLayout.module.scss';
import { Header } from '../Header/Header';
import Home from '../../Pages/home/Home';
import Employees from '../../Pages/employees/Employees';

const AppLayout = () => (
  <div className={styles.container}>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Employees" element={<Employees />} />
      </Routes>
    </main>
  </div>

);
export default AppLayout;
