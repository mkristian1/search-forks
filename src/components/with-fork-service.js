import React from 'react';
import { ForksServiceConsumer } from './forksContext';

const WithForksService = () => (Wrapped) => {
    return (props) => {
        return (
            <ForksServiceConsumer>
                {
                    (ForkService) => {
                        return (
                            <Wrapped {...props} forksSevice={ForkService} />
                        );
                    }
                }
            </ForksServiceConsumer>
        );
    }
}

export default WithForksService;