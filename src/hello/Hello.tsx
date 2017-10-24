import * as React from 'react';
import * as style from './Hello.css';
import msgs from './Hello.msg';

const msg = msgs.messages();

export interface Props {
    name: string;
    enthusiasmLevel: number;
    onMoreEnthusiastic: () => void;
    onLessEnthusiastic: () => void;
}

export default class Hello extends React.PureComponent<Props, {}> {

    constructor(props: Props) {
        super(props);
        checkProps(props);
    }

    render() {
        return (
            <div className={style.hello}>
                <div className="greeting">
                    {msg.hello(this.props.name, getExclamationMarks(this.props.enthusiasmLevel))}
                </div>
                <div>
                    <button className="less" onClick={this.props.onLessEnthusiastic}>-</button>
                    <button className="more" onClick={this.props.onMoreEnthusiastic}>+</button>
                </div>
            </div>
        );
    }

    componentWillReceiveProps(nextProps: Readonly<Props>): void {
        checkProps(nextProps);
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

function checkProps(props: Readonly<Props>): void {
    if (props.enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
}