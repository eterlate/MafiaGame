import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUserStorage {
    login: string,
    token: string
}

const LocalStorage = localStorage.getItem('UserDataStorage')

const initialState: IUserStorage = LocalStorage ? JSON.parse(LocalStorage) : {
    login: '',
    token: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUserStorage>) {
            localStorage.setItem('UserDataStorage', JSON.stringify({
                login: action.payload.login,
                token: action.payload.token
            }))
            state.login = action.payload.login
            state.token = action.payload.token
        },
        logout(state) {
            localStorage.removeItem('UserDataStorage')
            state.login = ''
            state.token = ''
        }
    }
})

export default authSlice.reducer