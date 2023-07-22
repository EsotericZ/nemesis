import { Fragment, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import './navbar.css';

const NavSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
}));

const AvatarButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
}));

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

export const Navbar = () => {
    
    return (
        <Box sx={{ alignContent: 'space-between' }}>  
        {/* // <Box> */}
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
            </NavSpeedDial>
            
            <Box m={2}>
                <Typography 
                    sx={{ fontSize: 40, textTransform: 'none' }}
                    className='nameFont'
                    align='center'
                >
                    Nemesis Racquetball
                </Typography>
            </Box>

            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <Fragment>
                        <AvatarButton 
                            sx={{ ":hover": {
                                bgcolor: '#463E78',
                            }}}
                            variant="text" 
                            {...bindTrigger(popupState)}
                        >
                            <Stack direction="row" spacing={2} alignItems='center'>
                                <Avatar 
                                    alt='test'
                                    sx={{ width: 50, height: 50,  backgroundColor: '#8C7CF0' }}
                                >
                                    T
                                </Avatar>
                                <Stack direction='column' spacing={0} justifyContent='center'>
                                    <Typography 
                                        sx={{ fontSize: 20, textTransform: 'none', fontWeight: 'bold'}}
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
                                <KeyboardArrowDownIcon sx={{ fontSize: 24 }} className='avatarName'/>
                            </Stack>
                        </AvatarButton>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>Profile</MenuItem>
                            <MenuItem onClick={popupState.close}>My account</MenuItem>
                            <MenuItem onClick={popupState.close}>Logout</MenuItem>
                        </Menu>
                    </Fragment>
                )}
            </PopupState>
        </Box>
    )
}