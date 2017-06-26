import { renderComponent , expect } from '../test_helper';
import App from '../../src/containers/App';

describe('App.js Test' , () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('App render test', () => {
        expect(component).to.exist;
    });
});
