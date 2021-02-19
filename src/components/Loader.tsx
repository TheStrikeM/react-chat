import React from 'react'
import {Container, Grid, Box, Button} from '@material-ui/core'

function Loader() {
    return (
        <Container>
            <Grid 
                container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justify={"center"}
            >
                <Grid container alignItems={'center'} direction={'column'} style={{width: 400, backgroundColor: 'white'}}>
                    <Box p={5}>
                        <div className="lds-hourglass"></div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loader
