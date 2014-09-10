![logo](http://ww2.sinaimg.cn/large/61ff0de3gw1e85z78fu6lj200w00w741.jpg) consoler ![npm](https://badge.fury.io/js/consoler.png)
---
another smart and colorful console logger

![screenshot](http://ww1.sinaimg.cn/large/61ff0de3gw1e8bic1y1zfj20lv0dxmz2.jpg)

### How to install

````
$ npm install consoler
````

### Sample code

```javascript
var consoler = require('consoler');

// check out in your console
consoler.log('success','hey dude, well done !');

// or use default tag
consoler.log('hey dude, well done !');

// or use shortcuts
consoler.success('success!');
consoler.error('fail!');
consoler.loading('wait a moment!');
```

### Run demos

```
$ git clone https://github.com/turingou/consoler.git
$ cd consoler/demo
$ node demo.js
```

### Text align

text align defalut length is 8, try to change edge length like this:
```javascript
consoler.align(20);
```

### Colors Map

feel free to add your labels and colors in `./colors.json` or add your event and the color

```javascript
var consoler = require('consoler');
consoler.add('alldone','green');
```

### Run unit-test (Mocha)

```
$ git clone https://github.com/turingou/consoler.git
$ cd consoler
$ npm install 
$ npm test
```