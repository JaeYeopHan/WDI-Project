import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
const url = 'http://localhost:3000';

describe('Connection test', () => {
    it('request to server', done => {
        chai.request(url)
            .get('/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
});
