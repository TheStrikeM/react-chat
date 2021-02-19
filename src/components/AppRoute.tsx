import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import {TRoutes} from '../types'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'

function AppRoute() {
    const user: boolean = true
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) => 
                    <Route path={path} component={Component} exact />
                )}
                <Redirect to={CHAT_ROUTE} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) => 
                    <Route path={path} component={Component} />
                )}
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
        )
}

export default AppRoute
