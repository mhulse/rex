# Rex (O'Herlihan)

[![ScreenShot](rex.gif)](http://youtu.be/LBkYqku11V0?t=1m58s)
**Oh yeah, root's kicking in!**

## Table of contents

- [About](#about)
	- [What is a baseline?](#what-is-a-baseline)
	- [What is a "global" baseline?]()
	- [What is a "local" baseline?]()
- [Demonstration]()
- [Installation]()
	- [Build process]()
- [SCSS](#scss)
- [CSS](#css)
	- [Baseline defaults]()
	- [Line height chart]()
	- [Line height offsets]()
	- [Unit conversion formulas]()
	- [Tips]()
- [Inspiration, links and resources]()
- [Feedback]()
- [Changelog](#changelog)
- [LEGAL](#legal)

## About

Essentially, this code serves as a "local" baseline grid toolkit for use in other css projects.

### What is a baseline?

[Wikipedia](http://en.wikipedia.org/wiki/Baseline_%28typography%29) says:

> … the baseline is the line upon which most letters "sit" and below which descenders extend.

For more information, [use Google](https://www.google.com/search?q="baseline+grid").

### What is a "global" baseline?

A "global" baseline (or, just "baseline grid") typically consists of applying a horizontal grid to the `<body>` and then aligning everything from there; this is the most commonly used technique as it's closely related to how baseline grids are done in print.

Again, [use Google](https://www.google.com/search?q="baseline+grids"+on+the+web) for more information.

### What is a "local" baseline?

Simply put, a "local" baseline gets applied directly to "modules", "content areas" or elements and the alignment happens relative to the application of the grid.

### Why "Rex"?

Because, Rex O'Herlihan **rocks!**

**[Buy Rustlers' Rhapsody](http://amzn.to/19CUPdE)!!!!** ([Amazon VOD](http://amzn.to/18PXwre)).

## Demonstration

DEVELOPMENT &bull; [html](https://raw.github.com/mhulse/rex/gh-pages/demo/index.html) &bull; [css](https://raw.github.com/mhulse/rex/gh-pages/demo/rex.css) | PRODUCTION &bull; [html](https://raw.github.com/mhulse/rex/gh-pages/demo/index.min.html) &bull; [css](https://raw.github.com/mhulse/rex/gh-pages/demo/rex.min.css)
:-: | :-:
[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://mhulse.github.io/rex/demo/&chs=240x240)](http://mhulse.github.io/rex/demo/) | [![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://mhulse.github.io/rex/demo/index.min.html&chs=240x240)](http://mhulse.github.io/rex/demo/index.min.html)

**Note:** Only the [`DEVELOPMENT` demo](http://mhulse.github.io/rex/demo/) uses [`normalize.css`](http://necolas.github.io/normalize.css/).

## Installation

There are several ways to install this code:

1. Download as a [`zip`](https://github.com/mhulse/rex/archive/gh-pages.zip).
1. Clone it: `$ git clone https://github.com/mhulse/rex.git`.
1. Fork it and clone: `$ git clone git@github.com:USERNAME/rex.git`.
1. Just grab the [relevant CSS](https://raw.github.com/mhulse/rex/gh-pages/demo/rex.css) ([minified](https://raw.github.com/mhulse/rex/gh-pages/demo/rex.min.css)).
1. Using [Bower](http://bower.io/): `$ bower install https://github.com/mhulse/rex.git`.

### Build process:

In order to build from source, you'll need to install [Grunt.js: The JavaScript Task Runner](http://gruntjs.com/).

From there, `$ cd source/` and run `$ npm install`; after the [dependencies](https://github.com/mhulse/rex/blob/gh-pages/source/package.json) have been installed, run `$ grunt bower` (this installs [`normalize.css`](http://necolas.github.io/normalize.css/) as a [Bower](http://bower.io/) dependency).

For subsequent builds, just run `$ grunt`; this default task will generate and copy files, based on files found in the `/source` folder, into the `/demo` folder.

## SCSS

Details on helper functions and variables coming soon.

## CSS

This section needs a description.

### Baseline defaults:

**Base `font-size`:** `16px` or `100%` or `1em`.

**Base `line-height`:** `24px` or `150%` or `1.5em`.

### Line height chart:

Assumes baseline defaults above are being used:

x? | Target `line-height` | Min/max `font-size`
:-: | --- | ---
**x1** | `24px` = `1.5em` | `0` - `24px` (`1.5em`)
**x2** | `48px` = `3em` | `25px` (`1.5625em`) - `48px` (`3em`)
**x3** | `72px` = `4.5em` | `49px` (`3.0625em`) - `72px` (`4.5em`)
**x4** | `96px` = `6em` | `73px` (`4.5625`) - `96px` (`6em`)
**x5** | `120px` = `7.5em` | `97px` (`6.0625em`) - `120px` (`7.5em`)

### Line height offsets:

Use these values for `line-height` offsets:

Fraction | Decimal
:-: | :-:
`1/8` | `.125`
`1/4` | `.25`
`3/8` | `.375`
`1/2` | `.5`
`5/8` | `.625`
`3/4` | `.75`
`7/8` | `.875`

### Unit conversion formulas:

Assuming that your base font size is `16px` (or equivalent):

* `px` to `em`:
	* **Formula:** [desired `font-size` in `px`] / [parent `font-size` in `px`]
	* **Example:** `12px` / `16px` = `.75em`
* `px` to `%`:
	* **Formula:** ([desired `font-size` in `px`] / [parent `font-size` in `px`]) * `100`
	* **Example:** (`12px` / `16px`) * `100` = `75%`
* `px` to `pt`:
	* **Formula:** [desired `font-size` in `px`] * ([`pts` per `in`] / [`px` per `in`])
	* **Example:** `16px` * (`72pt` / `96px`) = `12pt`
* `em` to `px`:
	* **Formula:** [desired `font-size` in `em`] * [parent `font-size` in `px`]
	* **Example:** `.75em` * `16px` = `12px`
* `em` to `%`:
	* **Formula:** [desired `font-size` in `em`] * `100`
	* **Example:** `.75em` * `100` = `75%`

### Tips:

* When inside a "local" baseline, make sure all elements take up a vertical height (including margins) that are multiples of the base line height (e.g., `24`).
* Calculate line height by dividing base line height by desired font size.
* If the font size is greater than your base line height (e.g., `24`), then base your calculations on the next full `line-height` value up (see "[Line height chart](#line-height-chart)" below). For example, if the desired font size is `2.875em` (i.e. `46px`), the math would be: (`1.5` * `2`) / `2.875` = `1.04347826086957`
* **Important:** When calculating line height, WebKit needs at least ten-millionth decimal places; for example: `line-height: 1.3333333;` (that's 7 decimal places).

## Inspiration, links and resources

This section needs a description.

**Typography:**

* [8 Simple Ways to Improve Typography In Your Designs](http://www.aisleone.net/2009/design/8-ways-to-improve-your-typography/)
* [Five simple steps to better typography](http://markboulton.co.uk/journal/five-simple-steps-to-better-typography)
* [The Elements of Typographic Style Applied to the Web](http://webtypography.net/toc/)
* [More Meaningful Typography](http://alistapart.com/article/more-meaningful-typography)

**Baseline/vertical rhythm:**

* [Modular Scale](http://modularscale.com/)

… more links coming soon.

## Feedback

[Bugs? Constructive feedback? Questions?](https://github.com/mhulse/rex/issues)

## Changelog

* vX.X.X
	* YYYY/MM/DD
		* …

---

#### LEGAL

Copyright &copy; 2013 [Micky Hulse](http://mhulse.com)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.