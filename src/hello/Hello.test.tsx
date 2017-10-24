import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello, { Props } from './Hello';
import { ShallowWrapper } from 'enzyme';

type Handler = () => void;
const dummyHandler: Handler = () => undefined;

function shallowHello(name: string, level: number,
                      more: Handler = dummyHandler, less: Handler = dummyHandler): ShallowWrapper<Props> {
    return enzyme.shallow((
        <Hello
            name={name}
            enthusiasmLevel={level}
            onMoreEnthusiastic={more}
            onLessEnthusiastic={less}
        />
    ));
}

describe('Hello', () => {
    it('renders the correct text with an explicit enthusiasm of 1', () => {
        const hello = shallowHello('Daniel', 1);
        expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
    });

    it('renders the correct text with an explicit enthusiasm level of 5', () => {
        const hello = shallowHello('Daniel', 5);
        expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
    });

    it('throws when the enthusiasm level is 0', () => {
        expect(() => {
            shallowHello('Daniel', 0);
        }).toThrow();
    });

    it('throws when the enthusiasm level is negative', () => {
        expect(() => {
            shallowHello('Daniel', -1);
        }).toThrow();
    });

    it('throws when the enthusiasm level is updated to missing enthusiasm', () => {
        const hello = shallowHello('Sven', 1);
        expect(() => {
            hello.setProps({enthusiasmLevel: 0});
        }).toThrow();
    });

    it('calls back when buttons are clicked', () => {
        const more = jest.fn();
        const less = jest.fn();
        const hello = shallowHello('Daniel', 1, more, less);

        const moreButton = hello.find('button.more');
        moreButton.simulate('click');
        expect(more).toHaveBeenCalledTimes(1);
        expect(less).not.toHaveBeenCalled();

        const lessButton = hello.find('button.less');
        lessButton.simulate('click');
        expect(less).toHaveBeenCalledTimes(1);
        expect(more).toHaveBeenCalledTimes(1);
    });
});