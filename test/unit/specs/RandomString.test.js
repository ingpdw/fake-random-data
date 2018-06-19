import RandomString from '@/randoms/RandomString';


describe('RandomString', () => {

  let str = '';

  beforeEach(() => {
    str = RandomString();
  });

  it('should be a String', () => {
    expect( typeof( str ) ).toBe( 'string' );
  });

  it('default length is 10', () => {
    expect( str.length ).toBe( 10 );
  });

  it('should be 20', () => {
    const len = 20;
    const rStr = RandomString( len );
    expect( rStr.length ).toBe( len );
  });

});
