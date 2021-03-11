import { Container } from '@material-ui/core';
import React from 'react';
import WithForksService from './with-fork-service';
import './app.css';
import ResultsTable from './results-table';
import SearchForm from './search-form';

const App = ({forksSevice}) => {
    console.log(forksSevice);
    return (
        <Container fixed>
            <div className="app">
                <SearchForm />
                <ResultsTable />
            </div>
        </Container>
    )
}

export default  WithForksService()(App);