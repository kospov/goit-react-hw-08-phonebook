import { NavLink } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';
import s from './Navigation.module.css';

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.activeLink}` : s.navLink;

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <div className={s.nav}>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink to="/" className={setActiveLinkClass}>
              HOME
            </NavLink>
          </li>
          {isAuth ? (
            <li className={s.item}>
              <NavLink to="contacts" className={setActiveLinkClass}>
                CONTACTS
              </NavLink>
            </li>
          ) : (
            <>
              <li className={s.item}>
                <NavLink to="login" className={setActiveLinkClass}>
                  LOGIN
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink to="register" className={setActiveLinkClass}>
                  REGISTER
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
