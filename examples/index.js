var consoler = require('../');

consoler('success','consoler is a smart and colorful consoleger');
consoler('consoler will read your package.json automatically');
consoler('loading','wait a moment, im loading...');
consoler('error','Opps, something happend...');
consoler('404','Not Found...');
consoler('500','Opps, something wrong...')

consoler.success('a success event');
consoler.error('a error event');
consoler.loading('a loading event');

consoler.add('customEvent','green');
consoler.customEvent('I am a custom Event');
consoler({a:1,b:2});