const RandomString = ( len = 10 ) => {
  len = parseInt( len, 10 );
  const range = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
  let count = range.length;
  let result = '';
  let idx = 0;

  for ( ;len > idx; idx++ ) {
    result += range.charAt( Math.floor(Math.random() * count ) );
  }

  return result;
}

export default RandomString;
