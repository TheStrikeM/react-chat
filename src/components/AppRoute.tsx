import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import {TRoutes} from '../types'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useSelector} from 'react-redux'

function AppRoute() {
    const {auth} = useSelector(({auth}: any) => ({
        auth: auth.auth,
    }))
    const [ user ] = useAuthState(auth)
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} component={Component} exact />
                )}
                <Redirect to={CHAT_ROUTE} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} component={Component} />
                )}
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
        )
}

export default AppRoute
