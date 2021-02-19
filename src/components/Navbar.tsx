import React from 'react'
import {AppBar, Button, Grid} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import {LOGIN_ROUTE} from '../utils/consts'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useSelector} from 'react-redux'


function Navbar() {
    const {auth} = useSelector(({auth}: any) => ({
        auth: auth.auth,
    }))
    const [ user ] = useAuthState(auth)

    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={'flex-end'}>
                    {user ? (
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>Выйти</Button>
                    ) : (
                        <Link to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Логин</Button>
                        </Link>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
