import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';
import jwt_decode from 'jwt-decode';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CreateIcon from '@mui/icons-material/Create';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Login } from '../Login';
import './navbar.css';

const style = {
    modalStyle: { 
        backgroundColor: "var(--background)",
        opacity: '0.9'
    },
    contentStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'var(--primary)',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    }
};

const NavSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
}));

const AvatarButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
}));

const actions = [
    { icon: <Link to='/home'><HomeIcon /></Link>, name: 'Home' },
    { icon: <Link to='/blog'><ChatBubbleOutlineIcon /></Link>, name: 'Blog' },
    { icon: <Link to='/events'><CalendarMonthIcon /></Link>, name: 'Events' },
    { icon: <Link to='/ranking'><PeopleIcon /></Link>, name: 'Rankings' },
];

export const Navbar = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const logout = useLogout();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const signOut = async () => {
        await logout();
        navigate('/');
    }
    
    const decoded = auth?.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined

    const email = decoded?.userInfo?.email || '';
    const playerName = `${decoded?.userInfo?.firstName} ${decoded?.userInfo?.lastName}` || '';
    const playerInitial = decoded?.userInfo?.firstName.charAt(0) || '';
    const playerRoles = decoded?.userInfo?.roles || [];

    return (
        <Box sx={{ alignContent: 'space-between' }}>
            <NavSpeedDial
                ariaLabel="SpeedDial playground example"
                icon={<SpeedDialIcon />}
                direction='down'
                sx={{ '& .MuiFab-primary': { width: 50, height: 50, backgroundColor: '#8C7CF0' } }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        sx={{ backgroundColor: '#070C27', color: '#CBCCD2', '&:hover': {a: {color: '#8C7CF0'}} }}
                    />
                ))}
                {!email &&
                    <SpeedDialAction
                        key='login'
                        icon={<Link to='/login'><LoginIcon /></Link>}
                        // icon={action.icon}
                        tooltipTitle='Login'
                        // onClick={handleOpen}
                        sx={{ backgroundColor: '#070C27', color: '#CBCCD2', '&:hover': {a: {color: '#8C7CF0'}} }}
                    />
                }
            </NavSpeedDial>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={style.modalStyle}
            >
                <Box sx={style.contentStyle}>
                    <Login />
                </Box>
            </Modal>
            
            {email &&
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <Fragment>
                            <AvatarButton
                                sx={{
                                    ":hover": {
                                        bgcolor: '#463E78',
                                    }
                                }}
                                variant="text"
                                {...bindTrigger(popupState)}
                            >
                                <Stack direction="row" spacing={2} alignItems='center'>
                                    <Avatar
                                        alt='test'
                                        sx={{ width: 50, height: 50, backgroundColor: '#8C7CF0' }}
                                    >
                                        {playerInitial}
                                    </Avatar>
                                    <Stack direction='column' spacing={0} justifyContent='center'>
                                        <Typography
                                            sx={{ fontSize: 20, textTransform: 'none', fontWeight: 'bold' }}
                                            className='avatarName'
                                            align='left'
                                        >
                                            {playerName}
                                        </Typography>
                                        <Typography
                                            sx={{ fontSize: 16, textTransform: 'none' }}
                                            className='avatarName'
                                            align='left'
                                        >
                                            Player
                                        </Typography>
                                    </Stack>
                                    <KeyboardArrowDownIcon sx={{ fontSize: 24 }} className='avatarName' />
                                </Stack>
                            </AvatarButton>
                            <Menu {...bindMenu(popupState)}>
                                {playerRoles.map((role, index) => {
                                    if (role === 1089) {
                                        return (
                                            <MenuItem onClick={popupState.close} className='profile'>
                                                <SettingsIcon className='profileIcon' />
                                                <Link to='/profileLink' className='profile'>Admin Dashboard</Link>
                                            </MenuItem>
                                        )
                                    }
                                    if (role === 1634) {
                                        return (
                                            <MenuItem onClick={popupState.close} className='profile'>
                                                <CreateIcon className='profileIcon' />
                                                <Link to='/profileLink' className='profile'>Blog Dashboard</Link>
                                            </MenuItem>
                                        )
                                    }
                                    if (role === 8128) {
                                        return (
                                            <MenuItem onClick={popupState.close} className='profile'>
                                                <CalendarMonthIcon className='profileIcon' />
                                                <Link to='/profileLink' className='profile'>Event Dashboard</Link>
                                            </MenuItem>
                                        )
                                    }
                                })}
                                <MenuItem onClick={popupState.close} className='profile'>
                                    <PersonIcon className='profileIcon' />
                                    <Link to='/profile' className='profile'>Profile</Link>
                                </MenuItem>
                                <Divider variant="middle" />
                                <MenuItem onClick={signOut} className='profile'><LogoutIcon className='profileIcon' />Logout</MenuItem>
                            </Menu>
                        </Fragment>
                    )}
                </PopupState>
            }
        </Box>
    )
}