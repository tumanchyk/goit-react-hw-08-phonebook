import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';
import { pending, fulfilled, rejected } from './queryStatus';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        list: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: pending,
        [fetchContacts.fulfilled]: (state, action) => {
            state.list = action.payload;
            fulfilled(state)
        },
        [fetchContacts.rejected]: rejected,

        [addContact.pending]: pending,
        [addContact.fulfilled]: (state, action) => {
            console.log(action);
            state.list.unshift(action.payload)
            fulfilled(state)
        },
        [addContact.rejected]: rejected,

        [deleteContact.pending]: pending,
        [deleteContact.fulfilled]: (state, action) => {            
            state.list = state.list.filter(({id}) => 
             id !== action.payload)
            fulfilled(state)
        },
        [deleteContact.rejected]: rejected,
    }
})

 export const contactsReducer = contactsSlice.reducer
