import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

afterEach(cleanup);

test('App screen to match snapshot', () => {
    const component = renderer.create(
        <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
