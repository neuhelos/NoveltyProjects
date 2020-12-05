import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '33%',
        padding: theme.spacing(2)
    },
    card: {
        width: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundSize: 'center'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


const FlixCard = ({ id, title, releaseDate, overview, poster, language}) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);



    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                action={
                    ""
                }
                title={title}
                subheader={`Release Date: ${releaseDate}`}
                />
                <CardMedia
                className={classes.media}
                image="https://lh3.googleusercontent.com/proxy/fDxbaI36b7KQZ-1wWsqTVc3yZkwHyId90dZb2zvDfXYcUnabLkuHZXZj-HXKPML799r0hs1d9SmAhWuIAwdKft_mhFMPjIBgQVteSNld_Xxpzn4CeQ"
                />
                <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>
                        Original Language: {language}
                    </Typography>
                    <Typography paragraph>
                        {overview}
                    </Typography>
                </CardContent>
                </Collapse>
            </Card>
        </div>
    );


}

export default FlixCard
