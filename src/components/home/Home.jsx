import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './home.css';

export const Home = () => {
    return(
        <Box m={2}>
            <Typography 
                sx={{ fontSize: 40, textTransform: 'none' }}
                className='nameFont'
                align='center'
            >
                Nemesis Racquetball
            </Typography>
        </Box>
    )
}