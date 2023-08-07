import { useState } from "react";
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import useAuth from '../../hooks/useAuth';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import PeopleIcon from '@mui/icons-material/People';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Login } from '../Login';
import './navbar.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
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
    { icon: <Link to='/events'><EmojiEventsIcon /></Link>, name: 'Events' },
    { icon: <Link to='/ranking'><PeopleIcon /></Link>, name: 'Rankings' },
];

export const Navbar = () => {
    const { auth } = useAuth();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
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
                    />
                ))}
                {!auth?.email &&
                    <SpeedDialAction
                        key='login'
                        // icon={action.icon}
                        tooltipTitle='Login'
                        onClick={handleOpen}
                    />
                }
            </NavSpeedDial>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Login />
                </Box>
            </Modal>
            
            {auth?.email &&
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
                                        T
                                    </Avatar>
                                    <Stack direction='column' spacing={0} justifyContent='center'>
                                        <Typography
                                            sx={{ fontSize: 20, textTransform: 'none', fontWeight: 'bold' }}
                                            className='avatarName'
                                            align='left'
                                        >
                                            CJ Sanders
                                        </Typography>
                                        <Typography
                                            sx={{ fontSize: 16, textTransform: 'none' }}
                                            className='avatarName'
                                            align='left'
                                        >Player</Typography>
                                    </Stack>
                                    <KeyboardArrowDownIcon sx={{ fontSize: 24 }} className='avatarName' />
                                </Stack>
                            </AvatarButton>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                <MenuItem onClick={popupState.close}>Logout</MenuItem>
                            </Menu>
                        </Fragment>
                    )}
                </PopupState>
            }
        </Box>
    )
}