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
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
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
    active : {
        color: '#ED3948'
    }
}));


const FlixCard = ({ id, title, releaseDate, overview, poster, language}) => {

    let user_id = 1

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    const [like, setLike] = useState(false)
    const [likesCount, setLikesCount] = useState(0)
    const [dislike, setDislike] = useState (false)
    const [dislikesCount, setDislikesCount] = useState(0)

    useEffect( () => {

        const fetchAllLikes = async () => {
            try {
                let res = await axios.get(`http://localhost:3000/likes/${id}`)
                setLikesCount(Number(res.data.payload[0].likes_count))
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllLikes()

        const fetchAllDislikes = async () => {
            try {
                let res = await axios.get(`http://localhost:3000/dislikes/${id}`)
                setDislikesCount(Number(res.data.payload[0].dislikes_count))
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllDislikes()
    }, [])


    const handleLike = async () => {
        if(!like){
            }
            setLike(true)
            setLikesCount( prevCount => prevCount + 1 )
            try {
                await axios.post(`http://localhost:3000/likes`, {
                    film_id: id,
                    user_id: user_id
                })
            } catch (error) {
                console.log(error)
        }
        if(dislike){
            setDislike(false)
            setDislikesCount( prevCount => prevCount - 1 )
            try {
                await axios.delete(`http://localhost:3000/dislikes/${user_id}/${id}`)
            } catch (error) {
                console.log(error)
            }
        }
        if(like) {
            setLike(false)
            setLikesCount( likesCount - 1 )
            try {
                await axios.delete(`http://localhost:3000/likes/${user_id}/${id}`)
            } catch (error) {
                console.log(error)
            }
            return
        }
    }

    const handleDislike = async () => {
        
        if(!dislike) {
            setDislike(true)
            setDislikesCount( prevCount => prevCount + 1)
            try {
                await axios.post(`http://localhost:3000/dislikes`, {
                    film_id: id,
                    user_id: user_id
                })
            } catch (error) {
                console.log(error)
            }
        }
        if(like){
            setLike(false)
            setLikesCount( prevCount => prevCount - 1 )
            try {
                await axios.delete(`http://localhost:3000/likes/${user_id}/${id}`)
            } catch (error) {
                console.log(error)
            }
        }
        if(dislike) {
            setDislike(false)
            setDislikesCount( prevCount => prevCount - 1 )
            try {
                await axios.delete(`http://localhost:3000/dislikes/${user_id}/${id} `)
            } catch (error) {
                console.log(error)
            }
        }
        
    }


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
                    image="https://images.squarespace-cdn.com/content/v1/5a6a74ffe45a7cb3647a68e7/1561133750956-5C141RBL08R9UMJUACBD/ke17ZwdGBToddI8pDm48kIIFsYAJJX10OgNkc4SuD20UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKce0j9vvU4chI_bB_CjBNrJapSKkBorzMUDpE1NYw5XxnDgGKGBETQKcT3bo-auxwM/ghostbusters-blog.jpg?format=1000w"
                    />
                <CardActions disableSpacing>
                <IconButton aria-label="like" onClick={handleLike}>
                    {like ? <ThumbUpIcon className={classes.active}/> : <ThumbUpOutlinedIcon/> }
                </IconButton>
                <Typography>Likes: {likesCount}</Typography>
                <IconButton aria-label="dislike" onClick={handleDislike}>
                    {dislike ? <ThumbDownIcon className={classes.active}/> : <ThumbDownOutlinedIcon/>}
                </IconButton>
                <Typography>Dislikes: {dislikesCount}</Typography>
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
