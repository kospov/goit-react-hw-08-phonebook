import axios from 'axios';

// axios.defaults.baseURL = 'https://62ffd90334344b6431021c53.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getItemApi = () => {
  return axios.get('/contacts').then(({ data }) => data);
};

export const addItemApi = item => {
  return axios.post('/contacts', item).then(({ data }) => data);
};

export const removeItemApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};

export const registerUserApi = userData => {
  return axios.post('/users/signup', userData).then(({ data }) => data);
};
