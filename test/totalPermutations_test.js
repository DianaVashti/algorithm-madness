import { expect } from 'chai'
import totalPermutations from '../src/totalPermutations'

describe('totalPermutations', function(){

  it('should be a function', function(){
    expect(totalPermutations).to.be.a('function')
  })

  it('should do weird stuff', function(){
    expect(totalPermutations('dawg')).to.deep.equal(24)
  })

  it('should do even weirder stuff', function(){
    expect(totalPermutations('mississippi')).to.deep.equal(34650)
  })


})
