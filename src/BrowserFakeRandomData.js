import FakeRandomData from './FakeRandomData';
import Namespacer from 'js-namespacer';

if ( window ) {
	Namespacer( window, 'FakeRandomData' );
	global.FakeRandomData = FakeRandomData;
}
