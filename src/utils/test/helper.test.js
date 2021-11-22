import { Helper } from '../Helper';
import { unmountComponentAtNode } from "react-dom";

describe('sorting', () => {

    let container = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("should return a acsending and descending array", () => {
        const value = Helper([50, 40, 30, 20, 10], "Ascending");
        expect(value).not.toBe([10, 20, 30, 40, 50])
    })
    it("should return a acsending and descending array", () => {
        const value = Helper([10, 20, 30, 40, 50], "Descending");
        expect(value).not.toBe([50, 40, 30, 20, 10])
    })
});