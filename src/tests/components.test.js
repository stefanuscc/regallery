import { cleanup } from "@testing-library/react";
import { Gallery } from "../components/Gallery";
import { List } from "../components/List";

import renderer from "react-test-renderer"

afterEach(cleanup);

it("Renders proper loading gallery mode", () => {
    const view = renderer.create(<Gallery isLoading={true} images={[]}/>);

    expect(view).toMatchSnapshot();
});

it("Renders proper loading list mode", () => {
    const view = renderer.create(<List isLoading={true} images={[]}/>);

    expect(view).toMatchSnapshot();
});