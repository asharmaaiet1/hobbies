import { userData } from "../data";
const shortid = require('shortid');

export const getUsers = () => {
  return fetch('/user')
    .then(response => response.json())
    .catch((error) => {
      return userData;
    });
};

export const addUser = (name: string) => {
  return fetch('/user/add', {
    method: 'POST',
    body: JSON.stringify({ name }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .catch((error) => {
      return {
        id: shortid.generate(),
        name: name
      };
    });
};
