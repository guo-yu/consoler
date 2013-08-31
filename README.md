![logo](http://ww2.sinaimg.cn/large/61ff0de3gw1e85z78fu6lj200w00w741.jpg) consoler ![npm](https://badge.fury.io/js/consoler.png)
---
another smart and colorful console logger

![thumb](http://ww4.sinaimg.cn/large/61ff0de3gw1e85zznn1u7j20ln0ccwg0.jpg)

## How to install

````
$ npm install consoler
````

## Sample code

````javascript
var consoler = require('consoler');

// check out in your console
consoler('success','hey dude, well done !');

// or 
consoler('hey dude, well done !');
````

## Run demos

````
$ git clone https://github.com/turingou/consoler.git
$ cd consoler/demo
$ node demo.js
````

## Colors Map

feel free to add your labels and colors in `./colors.json`

## Run unit-test (Mocha)

````
$ git clone https://github.com/turingou/consoler.git
$ cd consoler
$ npm install 
$ npm test
````