import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    user: {},
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateUser(state, action){
            return {...state, user: action.payload.user}
        },
        removeUser(state, action) {
            return {
                ...state,
                user: action.payload.user,
            }
        },
    }
});

export const { updateUser , removeUser } = loginSlice.actions;
export default loginSlice.reducer;