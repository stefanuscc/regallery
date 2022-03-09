import React from 'react';
import renderer from 'react-test-renderer';
import PageControl from './PageControl';
import "../../../setupTests"
import { shallow } from 'enzyme';
import Button from '../../micro/Button/Button';

test('Page Control to match snapshot', () => {
    const component = renderer.create(
        <PageControl page={1} max={3} onChange={() => {}} className=""/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Page number is according to max', () => {
    const max = 3;
    const control = shallow(
        <PageControl page={1} max={max} onChange={() => {}} className=""/>
    );

    expect(control.find(Button)).toHaveLength(max + 2);
});