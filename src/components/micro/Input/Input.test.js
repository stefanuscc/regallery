import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from './Input';
import "../../../setupTests"

test('Input to match snapshot', () => {
    const component = renderer.create(
        <Input type="text" className="" placeholder="Rename Image" value="Image #1" onChange={(val) => alert(val) }/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Input value is persistence', () => {
    const input = shallow(<Input type="text" className="" placeholder="Rename Image" value="Image #1" onChange={() => {}}/>);

    expect(input.prop('value')).toEqual('Image #1');

    // input.simulate('change', {
    //     target: {
    //         value: 'Mountain View'
    //     }
    // });

    // expect(input.prop('value')).toEqual('Mountain View');
});