import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Modal from './Modal';
import "../../../setupTests"

test('Modal to match snapshot', () => {
    const component = renderer.create(
        <Modal isOpen={true}>
            Hello World
        </Modal>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Modal content is persistence', () => {
    const modal = shallow(
        <Modal isOpen={true}>
            Hello World
        </Modal>
    );

    expect(modal.text()).toEqual('Hello World');
});