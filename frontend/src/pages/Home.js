import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../redux/features/noteSlice';
import AddIcon from '@mui/icons-material/Add';


const Home = () => {
    const { notes, isloading } = useSelector((store) => store.note)

    const dispatch = useDispatch();
    console.log(notes);
    useEffect(() => {
        dispatch(getNotes())
    }, [])

    return (
        <Container>
            <div>
            <IconButton href='/add'  >
                <AddIcon />
            </IconButton>
            </div>
            <Grid container spacing={2} marginTop={20}>
                {notes.map((item) => (
                    <Grid xs={9} md={5} lg={3} spacing={2} padding={3}>

                        <Card key={item.id} {...item} />
                    </Grid>
                ))}



            </Grid>
        </Container>
    )
}

export default Home