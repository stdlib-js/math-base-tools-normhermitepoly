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

# Normalized Hermite Polynomial

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Evaluate a normalized [Hermite polynomial][hermite-polynomial].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The normalized (aka "probabilist") [Hermite polynomials][hermite-polynomial] are given by

<!-- <equation class="equation" label="eq:normalized_hermite_polynomials" align="center" raw="He_{n}(x)=(-1)^{n} e^{\frac{x^2}{2}} \frac{\mathrm d^{n}}{\mathrm d x^{n}} e^{-\frac{x^2}{2}}" alt="Equation for normalized Hermite polynomials."> -->

<div class="equation" align="center" data-raw-text="He_{n}(x)=(-1)^{n} e^{\frac{x^2}{2}} \frac{\mathrm{d}^{n}}{\mathrm{d}x^n} e^{-\frac{x^2}{2}}" data-equation="eq:normalized_hermite_polynomials">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bea0101eb61892f160eec8d97dc79188fd937523/lib/node_modules/@stdlib/math/base/tools/normhermitepoly/docs/img/equation_normalized_hermite_polynomials.svg" alt="Equation for normalized Hermite polynomials.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-tools-normhermitepoly
```

</section>

<section class="usage">

## Usage

```javascript
var normhermitepoly = require( '@stdlib/math-base-tools-normhermitepoly' );
```

#### normhermitepoly( n, x )

Evaluates a normalized [Hermite polynomial][hermite-polynomial] of degree `n`.

```javascript
var v = normhermitepoly( 1, 1.0 );
// returns 1.0

v = normhermitepoly( 1, 0.5 );
// returns 0.5

v = normhermitepoly( 0, 0.5 );
// returns 1.0

v = normhermitepoly( 2, 0.5 );
// returns -0.75

v = normhermitepoly( -1, 0.5 );
// returns NaN
```

#### normhermitepoly.factory( n )

Returns a `function` for evaluating a normalized [Hermite polynomial][hermite-polynomial] of degree `n`.

```javascript
var polyval = normhermitepoly.factory( 2 );

var v = polyval( 0.5 );
// returns -0.75
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
var randu = require( '@stdlib/random-base-randu');
var normhermitepoly = require( '@stdlib/math-base-tools-normhermitepoly' );

var xx;
var yy;
var x;
var y;
var i;
var j;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    for ( j = 1; j < 3; j++ ) {
        y = normhermitepoly( j, x );
        xx = x.toFixed(3);
        yy = y.toFixed(3);
        console.log( 'He_%d( %d ) = %d', j, xx, yy );
    }
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/tools/evalpoly`][@stdlib/math/base/tools/evalpoly]</span><span class="delimiter">: </span><span class="description">evaluate a polynomial.</span>
-   <span class="package-name">[`@stdlib/math/base/tools/hermitepoly`][@stdlib/math/base/tools/hermitepoly]</span><span class="delimiter">: </span><span class="description">evaluate a physicist's Hermite polynomial.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-normhermitepoly.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-normhermitepoly

[test-image]: https://github.com/stdlib-js/math-base-tools-normhermitepoly/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-tools-normhermitepoly/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-normhermitepoly/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-normhermitepoly?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-normhermitepoly.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-normhermitepoly/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools-normhermitepoly/main/LICENSE

[hermite-polynomial]: https://en.wikipedia.org/wiki/Hermite_polynomials

<!-- <related-links> -->

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math-base-tools-evalpoly

[@stdlib/math/base/tools/hermitepoly]: https://github.com/stdlib-js/math-base-tools-hermitepoly

<!-- </related-links> -->

</section>

<!-- /.links -->
