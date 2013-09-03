# Rex (O'Herlihan)

[![ScreenShot](rex.gif)](http://youtu.be/LBkYqku11V0?t=1m58s)
**Oh yeah, root's kicking in!**

## Table of contents

- [About](#about)
	- [What is a baseline?](#what-is-a-baseline)
	- [What is a "global" baseline grid?](#what-is-a-global-baseline-grid)
	- [What is a "local" baseline grid?](#what-is-a-local-baseline-grid)
	- [Why use a "local" baseline?](#why-use-a-local-baseline)
	- [Why "Rex"?](#why-rex)
- [Demonstration](#demonstration)
- [Installation](#installation)
	- [Build process](#build-process)
- [SCSS API](#scss-api)
	- [Variables](#variables)
	- [Functions](#functions)
- [CSS](#css)
	- [Features](#features)
- [Feedback](#feedback)
- [Changelog](#changelog)
- [LEGAL](#legal)

## About

Essentially, this code serves as a slightly opinionated yet very simple "local baseline grid" toolkit for use in other css projects.

### What is a baseline?

[Wikipedia](http://en.wikipedia.org/wiki/Baseline_%28typography%29) says:

> … the baseline is the line upon which most letters "sit" and below which descenders extend.

### What is a "global" baseline grid?

A "global" baseline grid (or, "document-based" baseline grid) consists of applying a grid to the document's `<body>` and then aligning all the text to a vertical grid, set in even increments all the way down the page, where the bottom of each letter is positioned onto the grid, just like writing on lined paper.

### What is a "local" baseline grid?

A "local" baseline grid is exactly like the above, except the grid gets applied directly to "modules", "content areas" or elements and the alignment happens relative to the application of the vertical grid.

### Why use a "local" baseline?

While a "global" baseline grid might work well in print, on the web there are numerous situations where baseline grid alignment isn't practical.

Using a "local" baseline allows the developer to focus on the baseline grid alignment for a particular "module", "content area" or element whilst relieving the pressure to maintain baseline alignment between the aforementioned items.

The goal is to use a "local" baseline (and the math that powers it) as a quick and easy way to add vertical "meaning" to a page's content (much in the same way that a "horizontal" grid (rows/cols) gives "meaning" to a page's layout).

### Why "Rex"?

Just watch **[Rustlers' Rhapsody](http://amzn.to/19CUPdE)** ([Amazon VOD](http://amzn.to/18PXwre)) and all will be explained. :)

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

For subsequent builds, just run `$ grunt`; this default task will generate or copy files, based on the [`Gruntfile.js`](https://github.com/mhulse/rex/blob/gh-pages/source/Gruntfile.js) configuration and files found in the `/source` folder, into the `/demo` folder.

Run `$ grunt watch` to automatically regenerate build files when you modify the `Gruntfile.js`, any of the templates or SCSS files.

**Bonus:** Install the [LiveReload](http://feedback.livereload.com/knowledgebase/articles/86242) browser plugin to automatically reload your demo page when Grunt regenerates a new build (I'm using [Sublime Text 2](http://www.sublimetext.com/) and [LiveReload for Sublime Text 2](https://github.com/dz0ny/LiveReload-sublimetext2)).

## SCSS API

Available SCSS overrides and utilities:

### Variables:

Name | Description | Default
:-- | :-- | :--
`$NS` | Selector's "pseudo namespace" prefix | `rex_`
`$base_font-size` | Base `font-size`. | `16px`
`$base_line-height` | Base `line-height`. | `24px`
`$flag_natural-box-model` | Natural box layout? | `true`
`$flag_baseline` | Include the baseline class? | `true`
`$flag_heading-classes` | Heading classes? | `true`
`$flag_subheading-classes` | Subheading classes? | `true`
`$flag_responsive-images` | Responsive images? | `true`
`$flag_element-scroller` | Element scroller? | `true`

### Functions:

Name | Description
:-- | :--
`unitless($value, ...)` | Remove units from `$value`.
`relative($value, ...)` | Convert `$value` to relative number.
`baseline($value, ...)` | Calculate baseline from `$value`, which is assumed to be the baseline's element's `font-size`.

## CSS

CSS details:

### Features:

Feature | Description
:-- | :--
`rex_` | All rex classes have a "pseudo namespace" (which is controlled via the SCSS `$NS` variable).
`16px`/`24px` | Base `font-size` is `16px` and base `line-height` is `24px`; both of these values can be controlled via the SCSS variables `$base_font-size` and `$base_line-height` respectively.
`rem` & `em` | All units are relative; using `rem` and `em` where appropriate.
`border-box` | If `$flag_natural-box-model` is `true`, then all elements (including pseudo elements) will use `box-sizing: border-box;`; this change affects the box model in that the `width` and `height` properties include the `padding` and `border`, but not the `margin`.
`.rex_baseline` | If `$flag_baseline` is `true`, then a `.rex_baseline` class becomes available for use; this class should be applied to a wrapping `div` in order to test a "module", "content area" or element's placement on a "local" baseline grid. When the grid is clicked (i.e., `:active`) the base lines will hide and each child element will be outlined with a red border.
`.h1`-`.h6` | All headings (e.g., `h1` through `h6`) have a corresponding class of the same name (i.e., `.h1` through `.h6`); for more information, read: [Don’t Style Headings Using HTML5 Sections](http://www.stubbornella.org/content/2011/09/06/style-headings-using-html5-sections/). These classes can be disabled via the `$flag_heading-classes` variable.
`.sh1`-`.sh6` |  In the same vein as the heading classes above, there's a set of subheading classes (i.e., `.sh1` through `.sh6`) that have similar functionality and can be disable via the `$flag_subheading-classes` variable.
`.rex_scroller` | An "element" scroller class (`.rex_scroller`) has been included for the sake of wide tables; this class can be disabled via the `$flag_element-scroller` variable.

**Note:** Responsive image styles have been included and are used mostly for the sake of the demo (disable via the `$flag_responsive-images` variable); this feature may be removed in the near future.

## Feedback

[Bugs? Constructive feedback? Questions?](https://github.com/mhulse/rex/issues)

## Changelog

* v0.4.0
	* 2013/08/25
		* Changelog started.

---

#### LEGAL

Copyright &copy; 2013 [Micky Hulse](http://mhulse.com)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.