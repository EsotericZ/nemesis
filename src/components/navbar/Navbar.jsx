import { Fragment } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import './navbar.css';

export const Navbar = () => {
    return (
        <>  
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <Fragment>
                        <Button variant="outlined" {...bindTrigger(popupState)}>
                            <Stack direction="row" spacing={2}>
                                <Avatar 
                                    alt='test'
                                    sx={{ width: 56, height: 56 }}
                                >
                                    T
                                </Avatar>
                                <Stack direction='column' spacing={0} justifyContent='center'>
                                    <Typography 
                                        sx={{ fontSize: 18, textTransform: 'none', fontWeight: 'bold'}}
                                        className='avatarName'
                                    >
                                        CJ Sanders
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }}>Player</Typography>
                                </Stack>
                            </Stack>
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>Profile</MenuItem>
                            <MenuItem onClick={popupState.close}>My account</MenuItem>
                            <MenuItem onClick={popupState.close}>Logout</MenuItem>
                        </Menu>
                    </Fragment>
                )}
            </PopupState>
        </>
    )
}