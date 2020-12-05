import React, { useEffect } from 'react'

import FlixCard from './FlixCard'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        flex: '33%',
        flexFlow: 'wrap',
        padding: theme.spacing(1)
    },
}))

const FilmSearchFeed = ( { filmData } ) => {
    
    const classes = useStyles();


    let films = filmData.map( film => {
        return <FlixCard key={film.id} id={film.id}title={film.title} releaseDate={film.release_date} overview={film.overview} poster={film.poster_path} language={film.original_language}/>
    })
    

    useEffect( () => {
    }, [filmData])
    

    return (
        <div className={classes.root}>
            {!filmData ? <div>Search For Films</div> : films }
        </div>
    )
}

export default FilmSearchFeed
