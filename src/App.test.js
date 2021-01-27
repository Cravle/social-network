import {render, screen} from '@testing-library/react';
import ReactDOM from "react-dom";
import SocialNetworkApp from "./App";

test('renders learn react link', () => {
    render(<SocialNetworkApp/>);
    const linkElement = screen.getByText("img");
    expect(linkElement).toBeInTheDocument();
});

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocialNetworkApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
})