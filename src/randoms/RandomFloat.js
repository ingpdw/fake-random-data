const RandomFloat = (min, max) => {
  min = parseFloat( min );
  max = parseFloat( max );
  return Math.random() * ( max - min ) + min;
}

export default RandomFloat;
