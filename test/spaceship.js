
var  Spaceship  = require("../app/spaceship.js");
var {expect, assert} = require('chai');


describe('chandrayaan', () => {
  let chandrayaan;

  beforeEach(() => {
    chandrayaan = new Spaceship(0, 0, 0, 'N');
  });

  it('should have initial position and direction', () => {
    assert.deepEqual(chandrayaan.getPosition(),{x:0, y:0,z:0} ,"should have initial position and direction'") ;
    assert.equal(chandrayaan.getDirection(),'N' ,"Direction should be north in initial position");
  });
// test case forward movement 
   it('should move forward correctly', () => {
    chandrayaan.executeCommands(['f']);
     assert.deepEqual(chandrayaan.getPosition(),{ x: 0, y: 1, z: 0 } ,"should move forward correctly") ;
    assert.equal(chandrayaan.getDirection(),'N' ,"should move forward correctly");
  });

   it('should move backward correctly', () => {

    chandrayaan.executeCommands(['b']);
   assert.deepEqual(chandrayaan.getPosition(),{ x: 0, y: -1, z: 0 } ,"should move backward correctly") ;
    assert.equal(chandrayaan.getDirection(),'N' ,"should move backward correctly");
  });

   it('should turn right  correctly', () => {

    chandrayaan.executeCommands(['r']);
    assert.deepEqual(chandrayaan.getPosition(),{ x: 0, y: 0, z: 0 } ,"should turn right   correctly") ;
    assert.equal(chandrayaan.getDirection(),'E' ,"should turn right  correctly");
  });

   it('should turn up and then right correctly', () => {

    chandrayaan.executeCommands(['u','l']);
     assert.deepEqual(chandrayaan.getPosition(),{ x: 0, y: 0, z: 0 } ,"should  up and then turn right   correctly") ;
    assert.equal(chandrayaan.getDirection(),'N' ,"should turn up and then right  correctly");
  });


    it('should turn left correctly', () => {

    chandrayaan.executeCommands(['l']);
   assert.deepEqual(chandrayaan.getPosition(),{ x: 0, y: 0, z: 0 } ,"should left   correctly") ;
    assert.equal(chandrayaan.getDirection(),'W' ,"should left  correctly");
  });

  it('should turn up and then left correctly', () => {

    chandrayaan.executeCommands(['u','l']);
   assert.deepEqual(chandrayaan.getPosition(),{ x: 0, y: 0, z: 0 } ,"should turn up and then left   correctly") ;
    assert.equal(chandrayaan.getDirection(),'N' ,"should turn up and then left  correctly");
  });


   it('should turn up correctly', () => {

    chandrayaan.executeCommands(['u']);
    assert.deepEqual(chandrayaan.getPosition(),{ x: 0, y: 0, z: 0 } ,"should turn up   correctly") ;
    assert.equal(chandrayaan.getDirection(),'Up' ,"should turn up acorrectly");
  });

    it('should turn down correctly', () => {

    chandrayaan.executeCommands(['d']);
  assert.deepEqual(chandrayaan.getPosition(),{ x: 0, y: 0, z: 0 } ,"should turn down correctly") ;
    assert.equal(chandrayaan.getDirection(),'Down' ,"should turn down acorrectly");
  });

  // final test as mentioned in assignment
   it('pass test case 1', () => {

    chandrayaan.executeCommands(['f', 'r', 'u', 'b', 'l']);
    assert.deepEqual(chandrayaan.getPosition(),{ x: 0, y: 1, z: -1 } ,"pass test case 1") ;
    assert.equal(chandrayaan.getDirection(),'N' ,"pass test case 1");
   
  });

 
});