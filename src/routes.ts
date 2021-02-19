import {TRoutes} from './types'
import {LOGIN_ROUTE, CHAT_ROUTE} from './utils/consts'
import Login from './components/Login'
import Chat from './components/Chat'

export const publicRoutes: TRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes: TRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]