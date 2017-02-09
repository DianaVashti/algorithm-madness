import { expect } from 'chai'
import permuteString from '../src/permutations'

describe.only('permuteString', () => {
  it( 'is empty for an empty string', () => {
    expect( permuteString( '' )).to.eql( [] )
  })

  it( 'is a character for a single character string', () => {
    expect( permuteString( 'a' )).to.eql( [ 'a' ] )
  })

  it( 'permutes too correctly', () => {
    const expectedResult = [ 'too', 'oto', 'oot' ]
    const result = permuteString( 'too' )

    expect( result ).to.include( ...expectedResult )
    expect( result.length ).to.equal( expectedResult.length )
  })

  it( 'permutes dawgos', () => {
    const result = permuteString( 'dawgos' )

    expect( result.length ).to.equal( 720 )
  })

  it.only( 'permutes mississippi', () => {
    const result = permuteString( 'mississippi' )

    expect( result.length ).to.equal( 34650 )
  })
})
