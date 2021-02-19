import React from 'react'
import {Container, Grid, Box, Button} from '@material-ui/core'
import {useSelector} from 'react-redux'
import firebase from 'firebase'

function Login() {

    const {auth} = useSelector(({auth}: any) => ({
        auth: auth.auth,
    }))

    const onLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid 
                container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justify={"center"}
            >
                <Grid container alignItems={'center'} direction={'column'} style={{width: 400, backgroundColor: 'lightblue'}}>
                    <Box p={5}>
                        <Button onClick={onLogin} variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
