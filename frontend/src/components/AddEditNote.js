import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Field, Form, Formik, FormikProps } from 'formik';
import { Button, Box, TextField } from '@mui/material';
import { object, string } from 'yup';


import { createNote } from '../redux/features/noteSlice'






const initialValues = {

    title: '',
    description: '',

}



const AddEditNote = () => {
    const { notes, isloading } = useSelector((store) => store.note)

    const dispatch = useDispatch();



    return (

        <div>



            <Formik initialValues={initialValues} onSubmit={(values, formikHelpers) => {
                console.log(values);
                
                dispatch(createNote({values }))
                formikHelpers.resetForm();
            }}

                validationSchema={object({


                    title: string().required("Please enter Drink title"),
                    description: string().required("Please enter description")

                })}


            >
                {({ errors, isValid, touched, dirty }) => (
                    <Form style={{ padding: "10% 30% 10% 30%" }}>
                        <Field name="title" type="text" as={TextField} variant="outlined" color="primary" label="Title" fullWidth error={Boolean(errors.title) && Boolean(touched.title)} helperText={Boolean(touched.title) && errors.title} />
                        <Box height={14} />
                        <Field name="description" type="text" as={TextField} variant="outlined" color="primary" label="Description" fullWidth error={Boolean(errors.description) && Boolean(touched.description)} helperText={Boolean(touched.description) && errors.description} />
                        <Box height={14} />

                        <Button type='submit' varient="contained" color='primary' size='large'>Add Note</Button>
                    </Form>
                )}
            </Formik>



        </div>
    )


}

export default AddEditNote