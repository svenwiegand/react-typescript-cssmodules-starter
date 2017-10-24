import { translate } from 'typed-intl';

export default translate({
    welcome: 'Welcome to React with TypeScript',
    intro: 'To get started edit <code>src/App</code> and save to reload.'
}).supporting('de', {
    welcome: 'Willkommen zu React mit TypeScript',
    intro: 'Bearbeite <code>src/App</code> um loszulegen und speichere um neu zu laden.'
});