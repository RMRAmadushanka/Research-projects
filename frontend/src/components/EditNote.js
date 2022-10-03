import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Field, Form, Formik, FormikProps } from 'formik';
import { Button, Box } from '@mui/material';
import { object, string } from 'yup';


import { createNote, getNote } from '../redux/features/noteSlice'
import { useParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';


const initialValues = {

    title: "",
    description: "",

}





const EditNote = () => {
    const { notes, isloading } = useSelector((store) => store.note)
    const[title2,setTitle] = useState("");
    const[des,setdes] = useState("");
    const { title, description } = notes;
   
    const dispatch = useDispatch();
    
    const { id } = useParams();

    useEffect(() => {
       
        dispatch(getNote(id))
      
        
    }, [])
    const onInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
      };

    return (

        <div style={{ padding: "10% 30% 10% 30%" }}>



            {/* <Formik initialValues={initialValues}  onSubmit={(values, formikHelpers)  => {
                console.log(values);
              
                dispatch(createNote({values }))
                formikHelpers.resetForm();
            }}

                validationSchema={object({


                    title: string().required("Please enter Drink title"),
                    description: string().required("Please enter description")

                })}


            >
                {({ errors, isValid, touched, dirty,setFieldValue,handleChange }) => (
                    <Form style={{ padding: "10% 30% 10% 30%" }}>
                    
                        <Field name='title' type="text" as={TextField} variant="outlined" color="primary" label="Title" fullWidth error={Boolean(errors.title) && Boolean(touched.title)} helperText={Boolean(touched.title) && errors.title} />
                        <Box height={14} />
                        <Field name="description" type="text" as={TextField} variant="outlined" color="primary" label="Description" fullWidth error={Boolean(errors.description) && Boolean(touched.description)} helperText={Boolean(touched.description) && errors.description}  />
                        <Box height={14} />

                        <Button type='submit' varient="contained" color='primary' size='large'>Add Note</Button>
                    </Form>
                )}
            </Formik> */}

<Box
      sx={{
        width: 500,
        padding:2,
        maxWidth: '100%',
      }}
    >
      <TextField value={title} fullWidth  id="fullWidth"  />
    </Box>
    <Box
      sx={{
        width: 500,
        padding:2,
        maxWidth: '100%',
      }}
    >
      <TextField value={description} fullWidth  id="fullWidth"  onChange={onInputChange}/>
    </Box>
    <Button type='submit' varient="contained" color='primary' size='large'>Add Note</Button>
        </div>
    )


}

export default EditNote