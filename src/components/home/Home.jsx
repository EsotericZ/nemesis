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
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <div class="example-2 card">
                        <div class="wrapper">
                            <div class="header">
                                <div class="date">
                                    <span class="day">12</span>
                                    <span class="month">Aug</span>
                                    <span class="year">2016</span>
                                </div>
                                <ul class="menu-content">
                                    <li>
                                        <a href="#" class="fa fa-bookmark-o"></a>
                                    </li>
                                    <li><a href="#" class="fa fa-heart-o"></a></li>
                                    <li><a href="#" class="fa fa-comment-o"></a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                    <span class="author">Jane Doe</span>
                                    <h1 class="title">Stranger Things: The sound of the Upside Down</h1>
                                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                                    <a href="#" class="button">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>



                {/* <Card sx={{ maxWidth: 345 }} className='example-2'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card> */}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper>1</Paper>
            </Grid>
        </Grid>
        </Box >
    )
}