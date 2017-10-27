import * as React from 'react';
import * as style from './App.css';
import msgs from './App.msg';
import * as AppState from './AppState';
import store from './AppStore';
import Hello from './hello/Hello';
import * as Action from './AppAction';

const logo = require('./logo.svg');
const msg = msgs.messages();

export default class App extends React.PureComponent<{}, AppState.State> {
    private unsubscribe?: () => void = undefined;

    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount(): void {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount(): void {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    render() {
        return (
            <div className={style.app}>
                <div className={style.header}>
                    <img src={logo} className={style.logo} alt="logo"/>
                    <h2>{msg.welcome}</h2>
                </div>
                <p className={style.intro} dangerouslySetInnerHTML={{__html: msg.intro}}/>
                <Hello
                    name="TypeScript"
                    enthusiasmLevel={this.state.enthusiasm}
                    onMoreEnthusiastic={this.increaseEnthusiasm}
                    onLessEnthusiastic={this.decreaseEnthusiasm}
                />
            </div>
        );
    }

    private increaseEnthusiasm = () => {
        store.dispatch(Action.increaseEnthusiasm(1))
    };

    private decreaseEnthusiasm = () => {
        store.dispatch(Action.decreaseEnthusiasm(1))
    };
}