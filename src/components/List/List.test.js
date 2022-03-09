import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';
import "../../setupTests"

const images = [
    {
        "id": "1016",
        "author": "Philippe Wuyts",
        "width": 3844,
        "height": 2563,
        "url": "https://unsplash.com/photos/_h7aBovKia4",
        "download_url": "https://picsum.photos/id/1016/367/267",
        "name": "Image #1016"
    },
    {
        "id": "1018",
        "author": "Andrew Ridley",
        "width": 3914,
        "height": 2935,
        "url": "https://unsplash.com/photos/Kt5hRENuotI",
        "download_url": "https://picsum.photos/id/1018/367/267",
        "name": "Image #1018"
    },
    {
        "id": "1019",
        "author": "Patrick Fore",
        "width": 5472,
        "height": 3648,
        "url": "https://unsplash.com/photos/V6s1cmE39XM",
        "download_url": "https://picsum.photos/id/1019/367/267",
        "name": "Image #1019"
    }
];

test('List to match snapshot', () => {
    const component = renderer.create(
        <List selected={1016} onClick={() => {}} isLoading={false} images={images}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});