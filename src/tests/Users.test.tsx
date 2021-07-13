import React from 'react';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { render, fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import Users from '../components/Users';

import { userData } from '../data';

configure({ adapter: new Adapter() });

let wrapper: any;

const users = [
  {
    id: "1111",
    name: "Abhishek"
  },
  {
    id: "2222",
    name: "Sachin"
  },
  {
    id: "3333",
    name: "Someone"
  }
];

const newUser = {
  id: "12345",
  name: "Text"
};

jest.mock('../services/users', () => {
  return {
    getUsers: jest.fn(() => Promise.resolve(users)),
    addUser: jest.fn(() => Promise.resolve(newUser)),
  }
})

describe('<Users /> component', () => {

  const props = {
    usersList: userData,
    selectedUser: "",
    updateUsersList: jest.fn(),
    updateSelectedUser: jest.fn()
  }

  afterEach(() => wrapper.unmount())

  it('Renders <Users /> Component', () => {
    wrapper = render(<Users {...props} />)
    fireEvent.change(wrapper.getByPlaceholderText("Enter user name"), { target: { value: 'Text' } })
    expect(wrapper.getByPlaceholderText("Enter user name").value).toEqual("Text");
  });

  it('Validate add new user form', async () => {
    wrapper = render(<Users {...props} />)
    fireEvent.change(wrapper.getByPlaceholderText("Enter user name"), { target: { value: 'Text' } })
    fireEvent.click(wrapper.getByText("Add"))

    await act(async () => {
      
    });

    expect(wrapper.getByPlaceholderText("Enter user name").value).toEqual('');
  })
})
