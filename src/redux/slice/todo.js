import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async action to fetch todos
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
});

const todoSlice = createSlice({
  name: "todo", // Fix: Keep name lowercase for consistency
  initialState: {
    isLoading: false,
    data: [], // Fix: Set initial data as an empty array
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
      state.isError = false; // Reset error state
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload; 
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
