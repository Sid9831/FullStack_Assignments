import React, { useState, useEffect} from "react";
import { AppBar, Toolbar, Button, Typography, Avatar } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import useStyles from '../style'
import decode from 'jwt-decode'




const Navigation = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    const navigate = useNavigate()

    const logout = () => {
        navigate('/signIn')
        localStorage.clear()
        setUser(null)
    }
    
    useEffect(() => {
        const token = user?.token;
        if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('user')));
      });
    

    const classes = useStyles()

    return (
        <AppBar position="static" className={classes.appBar}>
            <Typography component={Link} to='/' variant="h5" className={classes.header}>TICKETING SYSTEM</Typography>
            <Toolbar>
                {user?.user.name ? (
                    <div className={classes.logoutHeader}>
                        <Avatar alt={user?.user.name}>{user?.user.name.charAt(0)}</Avatar>
                        <Button className={classes.logoutBtn} variant="contained" color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <>
                        <Button component={Link} to='/signIn' variant='contained' color="primary">Sign In</Button>&nbsp;&nbsp;&nbsp;
                        <Button component={Link} to='/signUp' variant='contained' color="primary">Sign Up</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navigation