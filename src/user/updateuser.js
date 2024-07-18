// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  users: [],
  status: 'idle',
  error: null,
};

// Fetch all users thunk
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No token found');
    }

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get('http://157.173.222.27:8080/api/v1/user/get-all', options);
    console.log(response);
    return response.data.users;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Update user thunk
export const updateUser = createAsyncThunk('users/updateUser', async (payload, { rejectWithValue }) => {
  try {
    const { id, userData } = payload;
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No token found');
    }

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(`http://157.173.222.27:8080/api/v1/user/update-profile/${id}`, userData, options);
    return response.data.updatedUser;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Delete user thunk
export const deleteUser = createAsyncThunk('users/deleteUser', async (id, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No token found');
    }

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`http://157.173.222.27:8080/api/v1/user/delete-profile/${id}`, options);
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// User slice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map(user =>
          user._id === action.payload._id ? action.payload : user
        );
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user._id !== action.payload);
      });
  },
});

// Export actions and reducer
export const selectAllUsers = state => state.users.users;
export default userSlice.reducer;
