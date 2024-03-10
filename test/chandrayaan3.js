
var  Spaceship  = require("../app/spaceship.js");
var {expect, assert} = require('chai');


describe('chandrayaan3', () => {
  let chandrayaan3;

  beforeEach(() => {
    chandrayaan3 = new Spaceship([0, 0, 0], 'N');
  });

  it('should have initial position and direction', () => {
    assert.deepEqual(chandrayaan3.getPosition(),[0, 0,0] ,"should have initial position and direction'") ;
    expect(chandrayaan3.getDirection()).equals('N');
  });

 
});