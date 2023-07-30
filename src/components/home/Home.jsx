import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './home.css';

import useRefreshToken from '../../hooks/useRefresh';

export const Home = () => {
    const refresh = useRefreshToken();

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