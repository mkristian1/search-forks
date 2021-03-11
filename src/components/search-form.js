import React from 'react';
import './search-form.css'
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = () => {
    return (
        <Paper className="search-form"  component="form">
            <InputBase
                placeholder="owner/:repositoryName"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchForm;