import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './AppLayout.module.scss';
import { Header } from '../Header/Header';
import Home from '../../Pages/home/Home';

const AppLayout = () => (
  <div className={styles.container}>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  </div>

);
export default AppLayout;
