import { expect } from 'chai'
import shuffleFactorial from '../src/shuffleFactorial'

describe('shuffleFactorial', function(){

  it('should be a function', function(){
    expect(shuffleFactorial).to.be.a('function')
  })

  it('should do weird stuff', function(){
    expect(shuffleFactorial('dawg').length).to.deep.equal(24)
  })

  it('should do even weirder stuff', function(){
    expect(shuffleFactorial('lose').length).to.deep.equal(60)
  })


})
