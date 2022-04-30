import { FormGroup, FormControl, InputLabel, Input, Button, Typography,makeStyles } from '@material-ui/core';
import React, {useState} from 'react'
import {validEmail, validPassword} from './Regex/regex'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {LogIn} from '../Actions/userActions'

const initialValue = {
    email: '',
    password: ''
}

const initialIsValidValue = {
    isemail: '',
    ispassword: ''
}



const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%'
    }
})

const SignIn = () => {

    const [user, setUser] = useState(initialValue)
    const {email, password} = user

    const [isValid, setIsValid] = useState(initialIsValidValue)
    const {isemail, ispassword} = isValid

    const classes = useStyles();
    let navigate = useNavigate()
    let dispatch = useDispatch()

    const ValidationMessageCSS = {color: 'red', marginBottom: '20px'}

    function onChangeSetState(e){
        setUser({...user, [e.target.name] : e.target.value})
    }

    const onValidate = (e, regex) => {
       
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

    var flag = true
    const validateDetailsFlag = Object.values(isValid).every(val => {
        if(val!==null && val!==''){
            flag = false
        }
        return flag
    })

    function validateDetails(){
        if(validateDetailsFlag){
            dispatch(LogIn(user, navigate))
        }
        else{
            alert('Invalid input!!')
        }
    }

    return(
        <FormGroup className={classes.container}>
            <Typography variant='h4'>Sign In</Typography>

            <FormControl>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <Input onChange={(e) => onChangeSetState(e)} onBlur={(e)=>onValidate(e, validEmail)} name='email' value={email} id="txtEmailId" inputProps={{maxLength: 50}}/>
                <div style={ValidationMessageCSS}>{isemail}</div>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input type='password' onChange={(e) => onChangeSetState(e)} onBlur={(e) => onValidate(e, validPassword)} name='password' value={password} id="txtPassword" inputProps={{maxLength: 12}}/>
                <div style={ValidationMessageCSS}>{ispassword}</div>
            </FormControl>
            <FormControl>
                <Button variant='contained' color='primary' disabled={email.length===0 || password.length===0} onClick={() => validateDetails()}>Sign In</Button>
            </FormControl>
        </FormGroup>
    )
}

export default SignIn

