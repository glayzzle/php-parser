var PHP = require('../src/php');
PHP.include('./foo.php');
console.log('Foo Result : ' + PHP.foo("Hello World"));

var bar = new PHP.bar('azerty');
console.log('Bar result : ' + bar.foo);
