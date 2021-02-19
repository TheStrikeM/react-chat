import React from 'react'
import {AppBar, Button, Grid} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import {LOGIN_ROUTE} from '../utils/consts'

function Navbar() {
    const user = true

    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar>
                <Grid container justify={'flex-end'}>
                    {user ? (
                        <Button variant={"outlined"}>Выйти</Button>
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
