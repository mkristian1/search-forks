import { Container } from '@material-ui/core';
import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { forksLoaded, searchForks } from '../actions';
import WithForksService from '../hoc/with-fork-service';
import './app.css';
import ResultsTable from './results-table';
import SearchForm from './search-form';

const App = ({ forksData, searchForks }) => {
    const [wordForSearching, setWordForSearching] = useState();

    const handleOnChange = (e) => {
        setWordForSearching(e.target.value);        
    }
    const handleOnClick = () => {
        searchForks(wordForSearching)
    }
    return (
        <Container fixed>
            <div className="app">
                <SearchForm 
                 handleOnChange={handleOnChange}
                 handleOnClick={handleOnClick} />
                <ResultsTable 
                forksData={forksData}  />
            </div>
        </Container>
    )
}

class AppContainer extends Component {
    componentDidMount() {
        const { forksService, forksLoaded} = this.props;
        const data = forksService.getForks();
        data.then(fork => forksLoaded(fork))
    }
    render() {
        const { forksData, searchForks } = this.props;
        return <App forksData={forksData} searchForks={searchForks} />
    }
}

const mapStateToProps = ({ forks }) => {
    return {
        forksData: forks
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        forksLoaded: (newForks) => {
            dispatch(forksLoaded(newForks))
        },
        searchForks: (searchWord) => {
            dispatch(searchForks(searchWord))
        }
    }
}

export default WithForksService()(connect(mapStateToProps, MapDispatchToProps)(AppContainer));