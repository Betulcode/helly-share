import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import { Formik } from 'formik';
import firebase from "../firebase/firebase.utils"

export const SignIn = () => {
   const initialValues={
        displayName:"",
        email:"",
        password:""
      }
    const handleFormSubmit=(values)=>{
        alert(JSON.stringfy(values,null,2));
    }

    const handleGoogle=()=>{
        firebase.useGoogleProvider();
      }

        return (
            <Container maxWidth="sm">

            <Formik
                 initialValues={initialValues} onSubmit={handleFormSubmit}>
             {({handleSubmit,values,handleChange})=>(
              <form onSubmit= {handleSubmit}>
                <Grid container spacing={3}>

                <Grid item xs={12}>
                <TextField  
                    name="email"
                    label="Outlined"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                   fullWidth />
                </Grid>

                <Grid item xs={12}>
                <TextField 
                name="password"
                label="Outlined" 
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                fullWidth />
                </Grid>

              
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="secondary"  fullWidth>Sıgn In </Button>
                </Grid>

                <Grid item xs={12}>
                <Button  variant="contained" color="secondary" onClick={handleGoogle} fullWidth>
                  Sign with Google
                </Button>
                </Grid>
              </Grid>
              </form>
            )}
            </Formik>
          </Container>
        )
       
}
