import React from 'react';
import './search-form.css'
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = ({handleOnChange, handleOnClick}) => {
    return (
        <Paper className="search-form"  component="form">
            <InputBase onChange={(e) => handleOnChange(e)}
                placeholder="owner/:repositoryName"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton onClick={handleOnClick} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchForm;