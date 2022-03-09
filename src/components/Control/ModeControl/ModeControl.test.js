import React from 'react';
import renderer from 'react-test-renderer';
import ModeControl from './ModeControl';
import "../../../setupTests"

test('Mode Control to match snapshot', () => {
    const component = renderer.create(
        <ModeControl mode={'gallery'} onChange={() => {}} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});