import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import './home.css';

// const Item = styled(Paper)(({ theme }) => ({
//     // ...theme.typography.body2,
//     background: 'transparent',
//     textAlign: 'center',
//     color: 'yellow',
//     elevation: 0,
// }));

export const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className='homePaper'>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={12}>
                    {/* <Item>Nemesis Racquetball</Item> */}
                    <div className='homeTitle'>Nemesis Racquetball</div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{backgroundColor: 'transparent'}} className="card">
                        <CardMedia 
                            className='wrapper'
                            image="https://res.cloudinary.com/duqbioalq/image/upload/v1693604797/home02_ct7sjr.jpg"
                            loading='lazy'
                        >
                            <CardContent className='header'>
                                <div class="date">
                                    <span>09/03/2023</span>
                                </div>
                                <ul class="menu-content">
                                    <li><a href="#" className="cardType">Nemesis Event</a></li>
                                </ul>
                            </CardContent>
                            <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}} className='data'>
                                <div class="content">
                                    <span class="author">Nemesis</span>
                                    <h1 class="title">No upcoming events</h1>
                                    <p class="text">Software is being built for use ASAP! Events will be available here in the near future</p>
                                    <a href="#" class="button">Register</a>
                                </div>
                            </CardContent>
                        </CardMedia>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3} className='grid'>
                    <Card style={{backgroundColor: 'transparent'}} className="card">
                        <CardMedia 
                            className='wrapper'
                            image="https://res.cloudinary.com/duqbioalq/image/upload/v1693604797/home03_kqw9jl.jpg"
                            loading='lazy'
                        >
                            <CardContent className='header'>
                                <div class="date">
                                    <span>09/03/2023</span>
                                </div>
                                <ul class="menu-content">
                                    <li><a href="#"  className="cardType">Blog</a></li>
                                </ul>
                            </CardContent>
                            <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}} className='data'>
                                <div class="content">
                                    <span class="author">CJ Sanders</span>
                                    <h1 class="title">Welcome to Nemesis Racquetball</h1>
                                    <p class="text">Home of the future for racquetball events, rankings, blog and more. Started in 2023</p>
                                    <a href="#" class="button">Read more</a>
                                </div>
                            </CardContent>
                        </CardMedia>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3} className='grid'>
                    <Card style={{backgroundColor: 'transparent'}} className="card">
                        <CardMedia 
                            className='wrapper'
                            image="https://res.cloudinary.com/duqbioalq/image/upload/v1693604797/home04_n90vnv.jpg"
                            loading='lazy'
                        >
                            <CardContent className='header'>
                                <div class="date">
                                    <span>09/03/2023</span>
                                </div>
                                <ul class="menu-content">
                                    <li><a href="#"  className="cardType">Rankings</a></li>
                                </ul>
                            </CardContent>
                            <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}} className='data'>
                                <div class="content">
                                    <span class="author">Nemesis</span>
                                    <h1 class="title">The new and improved ranking system</h1>
                                    <p class="text">No more tracking, a points based system based on the players level and scores of the match</p>
                                    <a href="/ranking" class="button">See Ranks</a>
                                </div>
                            </CardContent>
                        </CardMedia>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{backgroundColor: 'transparent'}} className="card">
                        <CardMedia 
                            className='wrapper'
                            image="https://res.cloudinary.com/duqbioalq/image/upload/v1693604796/home01_trezgh.jpg"
                            loading='lazy'
                        >
                            <CardContent className='header'>
                                <div class="date">
                                    <span>09/23/2023</span>
                                </div>
                                <ul class="menu-content">
                                    <li><a href="#" className="cardType">R2 Event</a></li>
                                </ul>
                            </CardContent>
                            <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}} className='data'>
                                <div class="content">
                                    <span class="author">Deb Beldring</span>
                                    <h1 class="title">DAC World Racquetball Day 09/03/2023</h1>
                                    <p class="text">
                                        Come bring in World Racquetball Day at the DAC! 
                                        We will be offering a full day of racquetball! Singles in the morning, doubles in the afternoon. 
                                        Get to know other players as we switch it up!
                                    </p>
                                    <a href="#" class="button">Full Calendar</a>
                                </div>
                            </CardContent>
                        </CardMedia>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    )
}