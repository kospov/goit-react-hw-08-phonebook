import { Outlet } from 'react-router-dom';
import AppNav from '../AppNav/AppNav';
import s from './Container.module.css';

const Container = () => {
  return (
    <div className={s.container}>
      <AppNav />
      <Outlet />
    </div>
  );
};

export default Container;
