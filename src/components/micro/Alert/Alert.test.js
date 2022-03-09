import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Alert from './Alert';
import "../../../setupTests"


test('Alert to match snapshot', () => {
    const component = renderer.create(
        <Alert message="There was some errors on the endpoint, please be patient."/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Alert message is persistence', () => {
    const alert = shallow(<Alert message="There was some errors on the endpoint, please be patient."/>);

    expect(alert.find('h3').text()).toEqual('There was some errors on the endpoint, please be patient.');
});