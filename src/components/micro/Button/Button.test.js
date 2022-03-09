import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button';
import "../../../setupTests"

test('Button to match snapshot', () => {
    const component = renderer.create(
        <Button 
            key="1"
            isActive={false}
            className=""
            disabled={false}
            onClick={ () => alert('') }
        >
            A Button
        </Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Button label is persistence', () => {
    const button = shallow(
        <Button 
            key="1"
            isActive={false}
            className=""
            disabled={false}
            onClick={ () => alert('') }
        >
            A Button
        </Button>
    );

    expect(button.text()).toEqual('A Button');
});