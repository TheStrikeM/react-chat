import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useSelector} from 'react-redux'
import {Container, Grid, TextField, Button} from '@material-ui/core';

function Chat() {
    const {auth, firestore} = useSelector(({auth}: any) => ({
        auth: auth.auth,
        firestore: auth.firestore
    }))
    const [ user ] = useAuthState(auth)
    const [value, setValue] = React.useState("")

    const sendMessage = async () => {
        console.log(value)
    }

    return (
        <Container>
            <Grid
                justify={'center'}
                style={{height: window.innerHeight - 50, marginTop: '30px'}}
            >
                <div style={{width: '100%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
                    
                </div>
                <Grid
                        container
                        direction={'column'}
                        alignItems={'flex-end'}
                        style={{width: '100%', marginTop: '30px'}}
                    >
                        <TextField value={value} onChange={e => setValue(e.target.value)} fullWidth rowsMax={2} variant={"outlined"}/>
                        <Button variant={"outlined"}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat
