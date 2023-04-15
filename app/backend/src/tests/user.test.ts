import * as sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);

describe('GET /users', () => {
  beforeEach(() => sinon.restore());
  
  it('should return status 200', async () => {
    const res = await chai.request(app).get('/users');
    expect(res.status).to.equal(200);
  });

  it('should return an array of objects', async () => {
    const res = await chai.request(app).get('/users');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body[0]).to.be.an('object');
  });
});
