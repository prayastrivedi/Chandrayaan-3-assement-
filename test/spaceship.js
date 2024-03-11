
var  Spaceship  = require("../app/spaceship.js");
var {expect, assert} = require('chai');


describe('chandrayaan', () => {
  let chandrayaan;

  beforeEach(() => {
    chandrayaan = new Spaceship(0, 0, 0, 'N');
  });

  // it('should have initial position and direction', () => {
  //   assert.deepEqual(chandrayaan.getPosition(),{x:0, y:0,z:0} ,"should have initial position and direction'") ;
  //   expect(chandrayaan.getDirection()).equals('N');
  // });

  //  it('should move forward correctly', () => {
 
  //   chandrayaan.executeCommands(['f']);
  //   expect(chandrayaan.getPosition()).to.deep.equal({ x: 0, y: 1, z: 0 });
  //   expect(chandrayaan.getDirection()).to.equal('N');
  // });

  // it('should move forward incorrectlly correctly', () => {
 
  //   chandrayaan.executeCommands(['f']);
  //   expect(chandrayaan.getPosition()).to.deep.equal({ x: 1, y: 0, z: 0 });
  //   expect(chandrayaan.getDirection()).to.equal('N');
  // });

  //  it('should move backward correctly', () => {

  //   chandrayaan.executeCommands(['b']);
  //   expect(chandrayaan.getPosition()).to.deep.equal({ x: 0, y: -1, z: 0 });
  //   expect(chandrayaan.getDirection()).to.equal('N');
  // });

  //  it('should turn right  correctly', () => {

  //   chandrayaan.executeCommands(['r']);
  //   expect(chandrayaan.getPosition()).to.deep.equal({ x: 0, y: 0, z: 0 });
  //   expect(chandrayaan.getDirection()).to.equal('E');
  // });

    it('should turn left correctly', () => {

    chandrayaan.executeCommands(['l']);
    expect(chandrayaan.getPosition()).to.deep.equal({ x: 0, y: 0, z: 0 });
    expect(chandrayaan.getDirection()).to.equal('W');
  });

  it('should turn up and then left correctly', () => {

    chandrayaan.executeCommands(['u','l']);
    expect(chandrayaan.getPosition()).to.deep.equal({ x: 0, y: 0, z: 0 });
    expect(chandrayaan.getDirection()).to.equal('N');
  });


  //  it('should turn up correctly', () => {

  //   chandrayaan.executeCommands(['u']);
  //   expect(chandrayaan.getPosition()).to.deep.equal({ x: 0, y: 0, z: 0 });
  //   expect(chandrayaan.getDirection()).to.equal('Up');
  // });

  //   it('should turn down correctly', () => {

  //   chandrayaan.executeCommands(['d']);
  //   expect(chandrayaan.getPosition()).to.deep.equal({ x: 0, y: 0, z: 0 });
  //   expect(chandrayaan.getDirection()).to.equal('Down');
  // });

  //  it('pass test case 1', () => {

  //   chandrayaan.executeCommands(['f', 'r', 'u', 'b', 'l']);
  //   expect(chandrayaan.getPosition()).to.deep.equal({ x: 0, y: 1, z: -1 });
  //   expect(chandrayaan.getDirection()).to.equal('N');
  //   //console.log(chandrayaan.getDirection(),chandrayaan.getPosition())
  // });

 
});