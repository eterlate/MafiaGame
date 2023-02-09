import { Navigate, Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import CreateSessionPage from "./pages/CreateSessionPage"
import FindSessionPage from "./pages/FindSessionPage"
import MainPage from "./pages/MainPage"
import ProfilePage from "./pages/ProfilePage"

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/create_session' element={<CreateSessionPage />} />
                <Route path='/find_session' element={<FindSessionPage />} />
                <Route path='*' element={<Navigate replace to="/" />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='*' element={<Navigate replace to="/auth" />} />
        </Routes>
    )
}