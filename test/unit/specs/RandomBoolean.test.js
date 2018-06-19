import RandomBoolean from '@/randoms/RandomBoolean';


describe('RandomBoolean', () => {

  it('should be boolean', () => {
    expect( typeof( RandomBoolean() ) ).toBe( 'boolean' );
  });

});
