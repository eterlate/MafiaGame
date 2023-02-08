import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUserStorage {
    username: string,
    token: string
}

const LocalStorage = localStorage.getItem('UserDataStorage')

const initialState: IUserStorage = LocalStorage ? JSON.parse(LocalStorage) : {
    username: '',
    token: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUserStorage>) {
            console.log(action.payload)
            localStorage.setItem('UserDataStorage', JSON.stringify({
                username: action.payload.username,
                token: action.payload.token
            }))
            state.username = action.payload.username
            state.token = action.payload.token
        },
        logout(state) {
            localStorage.removeItem('UserDataStorage')
            state.username = ''
            state.token = ''
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer