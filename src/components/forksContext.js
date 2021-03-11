import React from 'react';

const {
    Provider: ForksServiceProvider,
    Consumer: ForksServiceConsumer
} = React.createContext();

export {
    ForksServiceConsumer,
    ForksServiceProvider
}