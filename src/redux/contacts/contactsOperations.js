import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const isDublicate = ({ name, number }, contacts) => {
  const normalizedName = name?.toLowerCase();

  const result = contacts?.find(item => {
    return (
      normalizedName === item?.name.toLowerCase() ||
      number === item?.number.toLowerCase()
    );
  });

  return Boolean(result);
};

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const result = isDublicate(data, contacts.items);
      if (result) {
        alert(
          `This name "${data.name}" or number "${data.number}" is alredy exist`
        );
        return false;
      }
    },
  }
);
export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
