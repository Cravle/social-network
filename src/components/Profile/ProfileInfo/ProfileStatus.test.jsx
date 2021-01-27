import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status in props should be in the state", () => {
        const component = create(<ProfileStatus status={"cravlekek"}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("cravlekek");
    });

    test("after creation <h3> should be displayed  with correct status", () => {
        const component = create(<ProfileStatus status={"cravlekek"}/>);
        const root = component.root;
        let h3 = root.findByType("h3")
        expect(h3).not.toBeNull();
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={"cravlekek"}/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")

        }).toThrow();
    });

    test("correct status", () => {
        const component = create(<ProfileStatus status={"cravlekek"}/>);
        const root = component.root;
        let h3 = root.findByType("h3")
        expect(h3.children[0]).toBe('cravlekek');
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={"cravlekek"}/>);
        const root = component.root;
        let h3 = root.findByType("h3")
        h3.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("cravlekek")
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={"cravlekek"}
                                                updateUserStatus={mockCallback}/>);
        const instance = component.getInstance()
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});