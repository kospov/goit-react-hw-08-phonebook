import Navigation from 'components/Navigation/Navigation';
import s from './AppNav.module.css';

const AppNav = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};

export default AppNav;
