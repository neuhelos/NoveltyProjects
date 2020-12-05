import React, {useState} from 'react'
import axios from 'axios'

import FilmSearchFeed from './FilmSearchFeed'

import { useInput } from '../utilities/customHooks'

import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const { REACT_APP_APIKEY } = process.env


const useStyles = makeStyles( (theme) => ({
        root: {
            '& *' : {
                fontFamily: 'jost'
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(2)
        },
        input: {
            background: '#FFFFFF',
            width: '100%',
            marginRight: theme.spacing(1),
            borderRadius: '4px'
        },
        searchBar: {
            display: 'flex',
            width: '75%'
        }

}))


const FilmSearch = () => {
    
    const [filmData, setFilmData] = useState([])

    const searchQuery = useInput("")
    const classes = useStyles()


    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_APIKEY}&query=${searchQuery.value}&language=en-US&include_adult=false`)
            setFilmData(res.data.results)
            debugger
        } catch (error) {
            console.log(error)
        }
        searchQuery.clearinput()
    }


    return (
        <>
            <form className={classes.root} onSubmit={handleSubmit}>
                <Typography variant="h3" align="center" gutterBottom={true}>Flix Search</Typography>
                <div className={classes.searchBar}>
                    <FormControl className={classes.input}>
                        <InputLabel>Search For Your Flix</InputLabel>
                        <Input
                        type="search"
                        variant="filled"
                        placeholder="Search By Title"
                        startAdornment={
                            <InputAdornment position="start">
                            <SearchIcon />
                            </InputAdornment>
                        }
                        onChange={searchQuery.onChange}
                        onBlur={searchQuery.onBlur}
                        value={searchQuery.value}
                        style={{fontSize: '1.5rem', borderRadius: '4px'}}
                        />
                    </FormControl>
                    <Button className={classes.buttonSubmit} type="submit" variant="contained" color="primary" size='large'>
                        <SearchIcon fontSize='large'/>
                    </Button>
                </ div>
            </form>
            <FilmSearchFeed filmData={filmData} />
        </>
    )
}

export default FilmSearch
