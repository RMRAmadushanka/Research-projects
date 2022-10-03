import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteNote } from '../redux/features/noteSlice';
import { useDispatch } from 'react-redux';
import { Link } from '@mui/material';

const Card2 = ({ _id,title, description, createdAt }) => {
    
    const dispatch = useDispatch();
    return (
        <div>
            <Card elevation={1}>
                <CardHeader title={title} subheader={createdAt}
                    action={
                        <IconButton onClick={() =>dispatch(deleteNote({_id}))}>
                            <DeleteIcon />

                          
                        </IconButton>
                         
                    }
                />


                <CardContent>
                    <Typography variant='body2' color="textSecondary">
                        {description}
                        
                        <IconButton href={`/editTour/${_id}`}>
                        
                            <EditIcon />
                           
                        </IconButton>
                       
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Card2