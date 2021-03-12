import React from 'react';
const  { ForksServiceConsumer } = require('../components/forksContext');

const WithForksService = () => (Wrapped) => {
    return (props) => {
        return (
            <ForksServiceConsumer>
                {
                    (ForkService) => {
                        return (
                            <Wrapped {...props} forksService={ForkService} />
                        );
                    }
                }
            </ForksServiceConsumer>
        );
    }
}

export default WithForksService;