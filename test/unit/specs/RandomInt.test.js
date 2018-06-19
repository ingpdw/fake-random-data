import RandomInt from '@/randoms/RandomInt';

describe('RandomInt', () => {
  const min = 1;
  const max = 20;
  
  it('should be less than max', () => {
    expect( RandomInt( min, max ) ).toBeLessThanOrEqual( max );
  });

  it('should not be less than min', () => {
    expect( RandomInt( min, max ) ).not.toBeLessThan( min );
  });

  it('must return integer', () => {
    const rInt = RandomInt( min, max );
    expect( rInt ).toEqual( parseInt( rInt, 10 ) );
  });

  it('must return integer', () => {
    const rInt = RandomInt( '1', '10' );
    expect( typeof( rInt ) ).toEqual( 'number' );
  });

  it('must return NaN', () => {
    const str = 'str';
    const rInt = RandomInt( str, max );
    expect( rInt ).toEqual( NaN );
  });

  it('must return NaN', () => {
    const str = 'str';
    const rInt = RandomInt( str, max );
    expect( rInt ).toEqual( NaN );
  });
});
