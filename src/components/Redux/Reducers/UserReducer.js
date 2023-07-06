import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    name: "",
    email: "",
    photo: ""
}

const UserReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoginState: (state, action) =>{
           state.name = action.payload.name;
           state.email = action.payload.email;
           state.photo = action.payload.photo;
        },
        setLogOutState: (state, action) =>{
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },

});

export const { setLoginState, setLogOutState } = UserReducer.actions;
 
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.Email;
export const selectUserPhoto = (state) => state.user.photo;


export default UserReducer.reducer;