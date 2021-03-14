import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './results-table.css';
import CustomPaginationActionsTable from './CustomPaginationActionsTable';

const ResultsTable = ({ forksData, loading }) => {
    return (
        loading ? <div className="results-table"><CircularProgress /></div> :
            <div className="results-table">
                <h1>Forks Results</h1>
                <CustomPaginationActionsTable forksData={forksData} />
            </div>

    )
}

export default ResultsTable;

