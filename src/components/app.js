import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forksLoaded } from '../actions';
import WithForksService from '../hoc/with-fork-service';
import './app.css';
import ResultsTable from './results-table';
import SearchForm from './search-form';

const App = ({ forksData }) => {
    return (
        <Container fixed>
            <div className="app">
                <SearchForm />
                <ResultsTable forksData={forksData} />
            </div>
        </Container>
    )
}

class AppContainer extends Component {
    componentDidMount() {
        const { forksService, forksLoaded } = this.props;
        const data = forksService.getForks();
        data.then(fork => forksLoaded(fork))
    }
    render() {
        const { forksData } = this.props;
        return <App forksData={forksData} />
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
        }
    }
}

export default WithForksService()(connect(mapStateToProps, MapDispatchToProps)(AppContainer));