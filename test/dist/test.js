/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var mean = require( './../../dist' );


// FIXTURES //

var data = require( './../..xtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mean, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = mean( NaN, 1.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = mean( 1.0, NaN, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = mean( 1.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a nonpositive `alpha`, the function returns `NaN`', function test( t ) {
	var y;

	y = mean( 0.0, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( -1.0, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( -1.0, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( NINF, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( NINF, PINF, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( NINF, NaN, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a nonpositive `s`, the function returns `NaN`', function test( t ) {
	var y;

	y = mean( 2.0, 0.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 2.0, -1.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 2.0, -1.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 1.0, NINF, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( PINF, NINF, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( NaN, NINF, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the expected value of a Fréchet distribution', function test( t ) {
	var expected;
	var alpha;
	var delta;
	var tol;
	var s;
	var y;
	var i;

	expected = data.expected;
	alpha = data.alpha;
	s = data.s;
	for ( i = 0; i < alpha.length; i++ ) {
		y = mean( alpha[i], s[i], 0.0 );
		if ( expected[i] !== null) {
			if ( y === expected[i] ) {
				t.equal( y, expected[i], 'alpha:'+alpha[i]+', s: '+s[i]+', m: 0, y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 2.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. alpha: '+alpha[i]+'. s: '+s[i]+'. m: 0. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});
