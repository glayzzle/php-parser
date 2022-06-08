// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_048.phpt
  it("SPL: RecursiveRegexIterator and exception in has/getChildren", function () {
    expect(parser.parseCode("<?php\nclass MyRecursiveRegexIterator extends RecursiveRegexIterator\n{\n    function show()\n    {\n        foreach(new RecursiveIteratorIterator($this) as $k => $v)\n        {\n            var_dump($k);\n            var_dump($v);\n        }\n    }\n}\n$ar = new RecursiveArrayIterator(array('Foo', array('Bar'), 'FooBar', array('Baz'), 'Biz'));\n$it = new MyRecursiveRegexIterator($ar, '/Bar/');\n$it->show();\n?>")).toMatchSnapshot();
  });
});
