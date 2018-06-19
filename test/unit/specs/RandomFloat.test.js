import RandomFloat from '@/randoms/RandomFloat';

describe('RandomFloat', () => {
  const min = 1;
  const max = 20;
  
  it('should be less than max', () => {
    expect( RandomFloat( min, max ) ).toBeLessThanOrEqual( max );
  });

  it('should not be less than min', () => {
    expect( RandomFloat( min, max ) ).not.toBeLessThan( min );
  });

  it('must returns decimal value', () => {
    const rFloat = RandomFloat( min, max );

    expect( rFloat.toString().indexOf( '.' ) ).not.toEqual( -1 );
  });
});
