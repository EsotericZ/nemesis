import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './home.css';

export const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className='homePaper'>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{backgroundColor: 'transparent'}} className="card">
                        <CardMedia 
                            className='wrapper2'
                            image="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
                        >
                            <CardContent className='header'>
                                <div class="date">
                                    <span>08/16/2023</span>
                                </div>
                                <ul class="menu-content">
                                    <li><a href="#" className="cardType">Event</a></li>
                                </ul>
                            </CardContent>
                            <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}} className='data'>
                                <div class="content">
                                    <span class="author">Jane Doe</span>
                                    <h1 class="title">Stranger Things: The sound of the Upside Down</h1>
                                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                                    <a href="#" class="button">Read more</a>
                                </div>
                            </CardContent>
                        </CardMedia>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3} className='grid'>
                    <div class="card">
                        <div class="wrapper">
                            <div class="header">
                                <div class="date">
                                    <span>08/16/2023</span>
                                </div>
                                <ul class="menu-content">
                                    <li><a href="#" className="cardType">None</a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                    <span class="author">Jane Doe</span>
                                    <h1 class="title">Stranger Things</h1>
                                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                                    <a href="#" class="button">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3} className='grid'>
                <Card style={{backgroundColor: 'transparent'}} className="card">
                    <CardMedia 
                        className='wrapper2'
                        image="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
                    >
                        <CardContent className='header'>
                            <div class="date">
                                <span>08/16/2023</span>
                            </div>
                            <ul class="menu-content">
                                <li><a href="#"  className="cardType">Event</a></li>
                            </ul>
                        </CardContent>
                        <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}} className='data'>
                            <div class="content">
                                <span class="author">Jane Doe</span>
                                <h1 class="title">Stranger Things: The sound of the Upside Down</h1>
                                <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                                <a href="#" class="button">Read more</a>
                            </div>
                        </CardContent>
                    </CardMedia>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card style={{backgroundColor: 'transparent'}} className="card">
                    <CardMedia 
                        className='wrapper2'
                        image="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
                    >
                        <CardContent className='header'>
                            <div class="date">
                                <span>08/16/2023</span>
                            </div>
                            <ul class="menu-content">
                                <li><a href="#" className="cardType">Event</a></li>
                            </ul>
                        </CardContent>
                        <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}} className='data'>
                            <div class="content">
                                <span class="author">Jane Doe</span>
                                <h1 class="title">Stranger Things: The sound of the Upside Down</h1>
                                <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                                <a href="#" class="button">Read more</a>
                            </div>
                        </CardContent>
                    </CardMedia>
                </Card>
            </Grid>
        </Grid>
        </Box >
    )
}