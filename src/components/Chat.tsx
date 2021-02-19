import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useSelector} from 'react-redux'
import {Container, Grid, TextField, Button, Avatar} from '@material-ui/core'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Loader from './Loader'
import firebase from 'firebase'

function Chat() {
    const {auth, firestore} = useSelector(({auth}: any) => ({
        auth: auth.auth,
        firestore: auth.firestore
    }))
    const [ user ] = useAuthState(auth)
    const [value, setValue] = React.useState("")

    const [messages, loading]: any[] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid
                container
                justify={'center'}
                style={{height: window.innerHeight - 50, marginTop: 10}}
            >
                <div style={{width: '100%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
                    {messages.map((message: any) => 
                        <div style={{
                            margin: 10,
                            border: user.uid == message.uid ? '2px solid green' : '2px dashed red',
                            marginLeft: user.uid == message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5
                        }}>
                            <Grid container>
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div> 
                            </Grid>
                            <div>{message.text}</div>
                        </div>    
                    )}
                </div>
                <Grid
                        container
                        direction={'column'}
                        alignItems={'flex-end'}
                        style={{width: '100%', marginTop: '30px'}}
                    >
                        <TextField value={value} onChange={e => setValue(e.target.value)} fullWidth rowsMax={2} variant={"outlined"}/>
                        <Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat
