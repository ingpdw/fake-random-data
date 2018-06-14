const RandomFloat = (min, max) => {

  console.log( min, max );

  return Math.random() * ( max - min ) + min;
}

export default RandomFloat;
