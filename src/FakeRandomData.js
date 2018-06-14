import RandomBoolean from './randoms/RandomBoolean';
import RandomFloat from './randoms/RandomFloat';
import RandomInt from './randoms/RandomInt';
import RandomString from './randoms/RandomString';
import {fInt, fFloat, fBoolean, fString} from './AllowsType';
import Namespacer from 'js-namespacer';

class FakeRandomData {
	constructor() {

	}

	create( obj ) {
	  if ( !obj ) {
	    return obj;
	  }

	  if ( typeof( obj ) !== 'object' ) {
	    return this.replace( ...this.generate( obj ) );
	  }

	  var copy = obj.constructor();
	  for ( var attr in obj ) {
	    if ( obj.hasOwnProperty(attr) ) {
	      copy[attr] = this.create( obj[ attr ] );
	    }
	  }
	  return copy;
	}

	generate( val ) {
		const reg = /^\{\{(.+)\}\}$/;
		const result = reg.exec( val );

		if ( result ) {
			return result[ 1 ].split( ',' );
		}

		return val;
	}

	replace( type, min, max ) {
	  let val = type;

	  switch( type ) {
	    case fFloat:
	      val = RandomFloat( min, max );
	      break;
	    case fInt:
	      val = RandomInt( min, max );
	      break;
	    case fString:
	      val = RandomString( min );
	      break;
	    case fBoolean:
	      val = RandomBoolean();
	      break;
	  }

	  return val;
	}
}

Namespacer( window, 'FakeRandomData' );
window.FakeRandomData = FakeRandomData;

export default FakeRandomData;
