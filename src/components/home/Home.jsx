import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    1
                    {/* <Item>xs=6 md=8</Item> */}
                </Grid>
                <Grid item xs={6} md={4}>
                    3
                    {/* <Item>xs=6 md=4</Item> */}
                </Grid>
                <Grid item xs={6} md={4}>
                    4
                    {/* <Item>xs=6 md=4</Item> */}
                </Grid>
                <Grid item xs={6} md={8}>
                    6
                    {/* <Item>xs=6 md=8</Item> */}
                </Grid>
            </Grid>
        </Box>
    )
}