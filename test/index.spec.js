const chai = require('chai');
const expect = chai.expect;
const Index = require('../lib/index');
describe('cardValidator', () =>{       
  it('should return false if it is less than 12 or greater than 19 digits', () =>{
    expect(Index.cardValidator('0123456711')).to.equal(false);          
  });
  it('should return false if it is less than 12 or greater than 19 digits', () =>{
    expect(Index.cardValidator('123456789123456789112354')).to.equal(false);          
  });
  it('should return false for information other than number', () =>{
    expect(Index.cardValidator('AFDGTHRUEILGJOK')).to.equal(false);          
  });
  it('should return false if the last digit is not equal', () =>{
    expect(Index.cardValidator('1234567891234567')).to.equal(false);          
  }); 
  it('should return false if the last digit is not equal', () =>{
    expect(Index.cardValidator('1234567891234567')).to.equal(false);          
  });     
  it('should return false for equal numbers', () => {
    expect(Index.cardValidator('0000000000000000')).to.equal(false);
  });   
});     
