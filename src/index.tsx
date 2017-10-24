import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { selectPreferredLanguage } from 'typed-intl';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root') as HTMLElement;

selectPreferredLanguage(['en', 'de']);
registerServiceWorker();

function render(AppComponent: typeof App) {
    ReactDOM.render(
        <AppContainer>
            <AppComponent/>
        </AppContainer>,
        rootEl
    );
}

render(App);

// Hot Module Replacement API
declare const module: { hot?: { accept: (module: string, render: () => void) => void } };

if (module.hot) {
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default;
        render(NewApp);
    });
}