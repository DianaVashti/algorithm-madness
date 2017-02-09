const permuteString = input => {
  if( input.length === 0 ) {
    return []
  } else if ( input.length === 1 ) {
    return [ input ]
  }

  const letters = input.split( '' )

  return Object.keys(
    letters.reduce( permuteSubString( letters ), {} )
  )
}

const permuteSubString = letters => ( memo, character, index ) => {
  permuteString( substring( letters, index ) ).forEach( permutation =>
    memo[ `${character}${permutation}` ] = true
  )

  return memo
}

const substring = ( letters, index ) =>
  [
    ...letters.slice( 0, index ),
    ...letters.slice( index + 1 )
  ].join( '' )

export default permuteString
