import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './home.css';
import getAllUsers from '../../services/users/getAllUsers';

import useRefreshToken from '../../hooks/useRefresh';
import { useEffect } from 'react';

export const Home = () => {
    const refresh = useRefreshToken();
    const fetchData = async () => {
        try {
            const getUsers = await getAllUsers()
            .then((res) => {
                console.log(res)
            })
        } catch (err) {
            console.error(err);
        }
        
    }

    useEffect(() => {
        fetchData()
    }, []);
    

    return(
        <Box m={2}>
            <Typography 
                sx={{ fontSize: 40, textTransform: 'none' }}
                className='nameFont'
                align='center'
            >
                Nemesis Racquetball
            </Typography>
            <button onClick={() => refresh()}>Refresh</button>
        </Box>
        
    )
}