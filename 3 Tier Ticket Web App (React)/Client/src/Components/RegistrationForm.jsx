import React, {useState} from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button, Typography,makeStyles } from '@material-ui/core';
import {validEmail, validName, validNumeric, validPassword, validPhone} from './Regex/regex'
import { useNavigate } from 'react-router-dom';
import { SignUp } from '../Actions/userActions';
import { useDispatch } from 'react-redux';

//initial values for each of the fields in form
const initialValue = {
    name: '',
    email: '',
    phone: '',
    password: ''
}

//initial values for each of the error fields in the form for respective fields.
const initialIsValidValue = {
    isname: '',
    isemail: '',
    isphone: '',
    ispassword: ''
}


//styling to get the form in center
const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%'
    }
})


//function component
const RegistrationForm = () => {

    //defining state variables for each of the form fields
    const [user, setUser] = useState(initialValue)
    const {name, email, phone, password} = user

    //state variables for each error msg fields
    const [isValid, setIsValid] = useState(initialIsValidValue)
    const {isname, isemail, isphone, ispassword} = isValid


    const classes = useStyles();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //internal CSS for error messages 
    const ValidationMessageCSS = {color: 'red', marginBottom: '20px'}



    function onChangeSetState(e){
        setUser({...user, [e.target.name] : e.target.value})
    }

    const onValidate = (e, regex) => {
        //the regex will be imported as a string. To convert it back to regex, we use RegExp() constructor
        const RegExObj = new RegExp(regex)
        const isValidKey = 'is' + e.target.name

        if(e.target.value === '' || RegExObj.test(e.target.value)){
            setIsValid({...isValid, [isValidKey] : ''})
            setUser({...user, [e.target.name] : e.target.value})
        }
        else{
            setIsValid({...isValid, [isValidKey] : 'Invalid Input'})
        }
    }

    //After filling up the data, the button will be enabled. To prevent the form from submitting with invalid input,
    //we use the below logic
    var flag = true
    const validateDetailsFlag = Object.values(isValid).every(val => {
        if(val!==null && val!==''){
            flag = false
        }
        return flag
    })

    function validateDetails(){
        if(validateDetailsFlag){
            dispatch(SignUp(user, navigate))
        }
        else{
            alert('Invalid input!!')
        }
    }


    return(
        <FormGroup className={classes.container}>
            <Typography variant='h4'>Create Account</Typography>

            <FormControl>
                <InputLabel htmlFor='name'>Name</InputLabel>
                <Input onChange={(e) => onValidate(e, validName)} name='name' value={name} id="txtName" inputProps={{maxLength: 40}}/>
                <div style={ValidationMessageCSS}>{isname}</div>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <Input onChange={(e) => onChangeSetState(e)} onBlur={(e)=>onValidate(e, validEmail)} name='email' value={email} id="txtEmailId" inputProps={{maxLength: 50}}/>
                <div style={ValidationMessageCSS}>{isemail}</div>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='phone'>Phone</InputLabel>
                <Input onChange={(e) => onValidate(e, validNumeric)} onBlur={(e) => onValidate(e, validPhone)} name='phone' value={phone} id="txtContactNo" inputProps={{maxLength: 10}}/>
                <div style={ValidationMessageCSS}>{isphone}</div>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input type='password' onChange={(e) => onChangeSetState(e)} onBlur={(e) => onValidate(e, validPassword)} name='password' value={password} id="txtPassword" inputProps={{maxLength: 12}}/>
                <div style={ValidationMessageCSS}>{ispassword}</div>
            </FormControl>
            <FormControl>
                <Button variant='contained' color='primary' disabled={name.length===0 || email.length===0 || phone.length===0 || password.length===0} onClick={() => validateDetails()}>Sign Up</Button>
            </FormControl>
        </FormGroup>
    )
}

export default RegistrationForm
