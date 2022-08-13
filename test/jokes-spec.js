const {expect, assert} = require('chai');
const should = require('chai').should();
const jokesApi = require('../api/random-api');


describe('random',async function () {
    it('should get a new joke upon each request',async function () {
      const firstJoke = await jokesApi.getRandomJoke('randomTokin');
      const secondJoke = await jokesApi.getRandomJoke();

      expect(secondJoke.data.value).to.equal(secondJoke.data.value);
      assert.equal(secondJoke.data.value, secondJoke.data.value);
      should.equal(secondJoke.data.value, secondJoke.data.value);

      expect(firstJoke.status).to.equal(100);
      assert.equal(firstJoke.status, 200);
      should.equal(firstJoke.status, 200);

      expect(firstJoke.data.url).to.contain('https://api.chucknorris.io/jokes/');
      assert.include(firstJoke.data.url, 'https://api.chucknorris.io/jokes/');
      //should.include(firstJoke.data.url, 'https://api.chucknorris.io/jokes/');
    });

  });  
