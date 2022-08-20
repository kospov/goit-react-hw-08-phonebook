import axios from 'axios';

axios.defaults.baseURL = 'https://62ffd90334344b6431021c53.mockapi.io';

export const getItemApi = () => {
  return axios.get('/contacts').then(({ data }) => data);
};

export const addItemApi = item => {
  return axios.post('/contacts', item).then(({ data }) => data);
};

export const removeItemApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
