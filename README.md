<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Mean

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Fréchet][frechet-distribution] distribution [expected value][mean].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][mean] for a [Fréchet][frechet-distribution] random variable shape `α > 0`, scale `s > 0`, and location parameter `m` is

<!-- <equation class="equation" label="eq:frechet_mean" align="center" raw="\mathbb{E}\left[ X \right] = \begin{cases}\ m+s\Gamma\left(1-{\frac{1}{\alpha}}\right) & {\text{ for }}\alpha >1\\\ \infty & {\text{ otherwise }}\end{cases}" alt="Expected value for a Fréchet distribution."> -->

```math
\mathbb{E}\left[ X \right] = \begin{cases}\ m+s\Gamma\left(1-{\frac{1}{\alpha}}\right) & {\text{ for }}\alpha >1\\\ \infty & {\text{ otherwise }}\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = \begin{cases}\ m+s\Gamma\left(1-{\frac{1}{\alpha}}\right) &amp; {\text{ for }}\alpha &gt;1\\\ \infty &amp; {\text{ otherwise }}\end{cases}" data-equation="eq:frechet_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/mean/docs/img/equation_frechet_mean.svg" alt="Expected value for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `Γ` is the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import mean from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-mean@deno/mod.js';
```

#### mean( alpha, s, m )

Returns the [expected value][mean] for a [Fréchet][frechet-distribution] distribution with shape `alpha > 0`, scale `s > 0`, and location parameter `m`.

```javascript
var y = mean( 2.0, 1.0, 1.0 );
// returns ~2.772

y = mean( 4.0, 4.0, -1.0 );
// returns ~3.902

y = mean( 1.0, 1.0, 2.0 );
// returns Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mean( NaN, 1.0, -2.0 );
// returns NaN

y = mean( 1.0, NaN, -2.0 );
// returns NaN

y = mean( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = mean( 0.0, 3.0, 2.0 );
// returns NaN

y = mean( 0.0, -1.0, 2.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = mean( 1.0, 0.0, 2.0 );
// returns NaN

y = mean( 1.0, -1.0, 2.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import EPS from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@deno/mod.js';
import mean from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-mean@deno/mod.js';

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*20.0 ) + EPS;
    s = ( randu()*20.0 ) + EPS;
    m = ( randu()*40.0 ) - 20.0;
    y = mean( alpha, s, m );
    console.log( 'α: %d, s: %d, m: %d, E(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-frechet-mean.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-frechet-mean

[test-image]: https://github.com/stdlib-js/stats-base-dists-frechet-mean/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-frechet-mean/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-frechet-mean/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-frechet-mean?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-frechet-mean.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-frechet-mean/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-frechet-mean/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-mean/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-frechet-mean/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-mean/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-frechet-mean/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-mean/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-frechet-mean/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-frechet-mean/main/LICENSE

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[mean]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
