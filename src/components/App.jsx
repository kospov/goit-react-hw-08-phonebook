import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/authSelector';
import Container from '../components/Container/Container';
import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const App = () => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? (
    <Routes>
      <Route exact path="/" element={<Container />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route exact path="/" element={<Container />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
