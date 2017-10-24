import { format, translate } from 'typed-intl';

export default translate(lang => ({
    hello: format<string, string>(lang, 'Hello {1}{2}')
})).supporting('de', lang => ({
    hello: format<string, string>(lang, 'Hallo {1}{2}')
}));