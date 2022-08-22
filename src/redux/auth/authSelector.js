const getContactsFromLs = () =>
  JSON.parse(window.localStorage.getItem('token'));

export const getIsAuth = state => Boolean(getContactsFromLs());
