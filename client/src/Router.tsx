import { Navigate, Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import MainPage from "./pages/MainPage"

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Routes>
                <Route path='/auth' element={<AuthPage />} />
                <Route path='/' element={<MainPage />} />
                <Route path='*' element={<Navigate replace to="/" />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/' element={<MainPage />} />
            <Route path='*' element={<Navigate replace to="/" />} />
        </Routes>
    )
}