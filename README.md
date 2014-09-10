![logo](http://ww2.sinaimg.cn/large/61ff0de3gw1e85z78fu6lj200w00w741.jpg) consoler ![npm](https://badge.fury.io/js/consoler.png)
---
a smart and colorful console logger

![screenshot](./screenshot.png)

### Installation

```bash
$ npm install consoler
```

### Example

```js
var consoler = require('consoler');

consoler('success','hey dude, well done !');
consoler('hey dude, well done !');

// shortcuts
consoler.success('success!');
consoler.error('fail!');
consoler.loading('wait a moment!');
```

### Demo

```
$ git clone https://github.com/turingou/consoler.git
$ cd consoler/example
$ node index.js
```

### Tests (Mocha)

```
$ git clone https://github.com/turingou/consoler.git
$ cd consoler
$ npm install 
$ npm test
```

### MIT license
Copyright (c) 2014 Hsiaoming Yang, Guo Yu &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.3