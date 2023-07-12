import axios from 'axios';

const apiContacts = axios.create({
  baseURL: 'https://64ad822eb470006a5ec60e72.mockapi.io',
});

export const getContacts = async () => {
  const { data } = await apiContacts.get('/contacts');
  return data;
};
export const addContacts = async contact => {
  const { data } = await apiContacts.post('/contacts', contact);
  return data;
};
export const deleteContacts = id => apiContacts.delete(`/contacts/${id}`);
