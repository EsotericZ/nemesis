import { Fragment, useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import login from '../services/portal/login';
import useToggle from '../hooks/useToggle';
// Use this is you want to save form data
import useInput from '../hooks/useInput';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const Login = () => {
    const { setAuth } = useAuth();


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };




    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    const userRef = useRef();
    const errRef = useRef();

    // const [email, setEmail] = useState('');
    // Use this is you want to save form data
    const [email, resetEmail, emailAttributes] = useInput('email', '');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [check, toggleCheck] = useToggle('persist', false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await login(email, password);
            const accessToken = response?.data?.accessToken;
            setAuth({ email, accessToken });
            // setEmail('');
            // Use this is you want to save form data
            resetEmail();
            setPassword('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No Server Response');
            } else if (err.response?.status === 400) {
                setErrorMessage('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setErrorMessage('Unauthorized');
            } else {
                setErrorMessage('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <section>
            <p ref={errRef} className={errorMessage ? "errmsg" : "offscreen"} aria-live="assertive">{errorMessage}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    // onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                    // Use this is you want to save form data
                    {...emailAttributes}
                    required
                />

                {/* <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                /> */}
                <button>Sign In</button>
                <div className="persistCheck">
                    <input 
                        type='checkbox'
                        id='persist'
                        onChange={toggleCheck}
                        checked={check}
                    />
                    <label htmlFor="persist">Trust This Device</label>
                </div>
            </form>
            {/* <p>
                Need an Account?<br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p> */}



            <Box sx={{ width: '500px', ml:'auto', mr:'auto' }}>
                <Typography variant="h6" gutterBottom>
                    Sign In
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </FormControl>
                        {/* <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                        /> */}
                    </Grid>
                    <Grid item xs={12}>
                        <Button className='forwardBtn'
                            color='inherit'
                            label="Remember Me"
                        >Sign In
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="rememberMe" value="yes" />}
                            label="Remember Me"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to="/register">Forgot Password</Link>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Link to="/register">Create Account</Link>
                    </Grid>
                </Grid>
            </Box> 
        </section>
    )
}