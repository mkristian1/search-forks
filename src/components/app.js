import { Container } from '@material-ui/core';
import React from 'react';
import './app.css';
import ResultsTable from './results-table';
import SearchForm from './search-form';

const App = () => {
    return (
        <Container fixed>
            <div className="app">
                <SearchForm />
                <ResultsTable />
            </div>
        </Container>
    )
}

export default App;