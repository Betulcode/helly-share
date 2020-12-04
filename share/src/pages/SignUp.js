import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container"
import {useFormik} from "formik"
import firebase from "../firebase/firebase.utils"



export const SignUp = () => {
 
   const formik=useFormik({
        initialValues:{
          displayName:"",
          email:"",
          password:""
        },
     onSubmit:(values)=>{
      //  console.log("merhaba")
      //  firebase.register(values.email,values.password)
     },

        validate: values => {
       
        let errors={}
            if (!values.displayName) {
              errors.displayName="Required"
            }
          
            if (!values.email) {
              errors.email="Required"
            }

            if (!values.password) {
              errors.password="Required"
            }
          return errors;
          }
        });

        const handleGoogle=()=>{
          firebase.useGoogleProvider();
        }

      
     
        return (
       
          <Container maxWidth="sm">
              <form onSubmit={formik.handleSubmit}>
            
              <Grid container spacing={3}>
                <Grid item xs={12}>
                
        
                <TextField 
                  label="Outlined" 
                   variant="outlined"
                   name="displayName" 
                   onChange={formik.handleChange}
                   values={formik.values.displayName}
                   fullWidth />
                    {
                     formik.errors.displayName ? <div>{formik.errors.displayName}</div> : null
                    }
                </Grid>
                <Grid item xs={12}>
                <TextField  
                    name="email"
                    label="Outlined"
                    variant="outlined"
                    onChange={formik.handleChange}
                    values={formik.values.email} 
                    fullWidth />
                      {
                     formik.errors.email ? <div>{formik.errors.email}</div> : null
                    }
                </Grid>
                <Grid item xs={12}>
                <TextField 
                name="password"
                label="Outlined" 
                variant="outlined"
                onChange={formik.handleChange}
                values={formik.values.password} 
                fullWidth />
             
                   {
                     formik.errors.password ? <div>{formik.errors.password} </div> : null
                    }
                </Grid>

              
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="secondary" onClick={firebase.register(formik.values.email,formik.values.password)}  fullWidth>Register</Button>
 
                </Grid>

                <Grid item xs={12}>
                <Button  variant="contained" color="secondary" onClick={handleGoogle} fullWidth>
                  Sign with Google
                </Button>
           
                </Grid>
               
              </Grid>
              </form>
          </Container>
       
        )
}
