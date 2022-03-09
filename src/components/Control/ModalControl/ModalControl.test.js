import React from 'react';
import renderer from 'react-test-renderer';
import ModalControl from './ModalControl';
import "../../../setupTests"

test('Modal Control to match snapshot', () => {
    const component = renderer.create(
        <ModalControl onSave={() => {}} onCancel={() => {}}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});