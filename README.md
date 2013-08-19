# Rex (O'Herlihan)

[![ScreenShot](rex.gif)](http://youtu.be/LBkYqku11V0)
**Oh yeah, root's kicking in!**

---

#### TOC

… Coming soon ...

---

#### ABOUT

… Coming soon ...

---

#### DEMO

DEVELOPMENT &bull; [html](https://raw.github.com/mhulse/rex/gh-pages/demo/index.html) &bull; [css](https://raw.github.com/mhulse/rex/gh-pages/demo/rex.css) | PRODUCTION &bull; [html](https://raw.github.com/mhulse/rex/gh-pages/demo/index.min.html) &bull; [css](https://raw.github.com/mhulse/rex/gh-pages/demo/rex.min.css)
:-: | :-:
[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://mhulse.github.io/rex/demo/&chs=240x240)](http://mhulse.github.io/rex/demo/) | [![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://mhulse.github.io/rex/demo/index.min.html&chs=240x240)](http://mhulse.github.io/rex/demo/index.min.html)

**Note:** Only the [`DEVELOPMENT` demo](http://mhulse.github.io/rex/demo/) uses [`normalize.css`](http://necolas.github.io/normalize.css/).

---

#### BASELINE

**Base `font-size`:** `16px` or `100%` or `1em`.

**Base `line-height`:** `24px` or `150%` or `1.5em`.

**Rule:** Make sure all elements take up a vertical height (including margins) are multiples of our base line height (`24`).

Calculate line height by dividing base line height by desired font size.

If the font size is greater than `24px`, then base your calculations on the next full `line-height` value up. For example, if the desired font size is `2.875em` (i.e. `46px`), the math would be:

(`1.5` * `2`) / `2.875` = `1.04347826086957`

**Line height chart:**

x? | Target `line-height` | Min/max `font-size`
:-: | --- | ---
**x1** | `24px` = `1.5em` | `0` - `24px` (`1.5em`)
**x2** | `48px` = `3em` | `25px` (`1.5625em`) - `48px` (`3em`)
**x3** | `72px` = `4.5em` | `49px` (`3.0625em`) - `72px` (`4.5em`)
**x4** | `96px` = `6em` | `73px` (`4.5625`) - `96px` (`6em`)
**x5** | `120px` = `7.5em` | `97px` (`6.0625em`) - `120px` (`7.5em`)

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

**Important:** WebKit needs at least ten-millionth decimal places; for example: `line-height: 1.3333333;` (that's 7 decimal places).

---

#### CONVERSIONS

Assuming that your base font size is `16px` (or equivalent):

Goal         | Formula                                                                | Example
:-:          | ---                                                                    | ---
`px` to `em` | [desired `font-size` in `px`] / [parent `font-size` in `px`]           | `12px` / `16px` = `.75em`
`px` to `%`  | ([desired `font-size` in `px`] / [parent `font-size` in `px`]) * `100` | (`12px` / `16px`) * `100` = `75%`
`px` to `pt` | [desired `font-size` in `px`] * ([`pts` per `in`] / [`px` per `in`])   | `16px` * (`72pt` / `96px`) = `12pt`
`em` to `px` | [desired `font-size` in `em`] * [parent `font-size` in `px`]           | `.75em` * `16px` = `12px`
`em` to `%`  | [desired `font-size` in `em`] * `100`                                  | `.75em` * `100` = `75%`

---

#### SCSS

… Helper functions … Coming soon.

---

#### INSTALLATION

Using [Bower](http://bower.io/) … Coming soon ...

---

#### INSPIRATION


**Typography:**

* [8 Simple Ways to Improve Typography In Your Designs](http://www.aisleone.net/2009/design/8-ways-to-improve-your-typography/)
* [Five simple steps to better typography](http://markboulton.co.uk/journal/five-simple-steps-to-better-typography)
* [The Elements of Typographic Style Applied to the Web](http://webtypography.net/toc/)
* [More Meaningful Typography](http://alistapart.com/article/more-meaningful-typography)

**Baseline/vertical rhythm:**

* [Modular Scale](http://modularscale.com/)

---

#### LEGAL

Copyright &copy; 2013 [Micky Hulse](http://mhulse.com)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.