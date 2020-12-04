import React, {useState} from 'react'

import FilmSearchFeed from './FilmSearchFeed'

import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles( (theme) => ({
        root: {
            '& *' : {
                fontFamily: 'jost'
            }
        }

}))


const FilmSearch = () => {
    
    const classes = useStyles()

    


    return (
        <div className={classes.root}>
            <Typography variant="h3" align="center">Flix Deets Search</Typography>
            <form>
                <FormControl className={classes.root}>
                    <InputLabel htmlFor="input-with-icon-adornment" className={classes.font}>Search For Your Flix</InputLabel>
                    <Input
                    className={classes.font}
                    type="search"
                    id="input-with-icon-adornment"
                    variant = "filled"
                    placeholder="Search By Title"
                    startAdornment={
                        <InputAdornment position="start">
                        <SearchIcon />
                        </InputAdornment>
                    }
                    {}
                    />
                </FormControl>
            </form>
            <FilmSearchFeed />
        </div>
    )
}

export default FilmSearch
