var consoler = require('../index');

consoler.log('success','consoler is a smart and colorful console logger');
consoler.log('consoler will read your package.json automatically');
consoler.log('loading','wait a moment, im loading.....');
consoler.log('error','Opps, something happend.....');
consoler.log(404,'Not Found.....');
consoler.log(500,'Opps, something happend.....')

consoler.loading('change text-align edge length -> 10');
consoler.align(9);
consoler.success('123');
consoler.error('123');
consoler.loading('123');

consoler.add('myevent','green');
consoler.log('myevent','123123123');
consoler.log({a:1,b:2});