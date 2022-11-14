import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchAllContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContactByName(name, number) {
  const newContact = { name, number };
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}

export async function deleteContactById(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
