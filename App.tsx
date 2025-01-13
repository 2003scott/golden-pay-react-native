/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { MainLayout } from './src/layouts';
import { Navigation } from './src/routes';

function App(): JSX.Element {
    return (
        <MainLayout>
            <Navigation/>
        </MainLayout>
    )
}

export default App;
