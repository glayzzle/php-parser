// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_009.phpt
  it("method overloading with different method signature", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function foo(Test $arg) {}\n}\nclass test2 extends test {\n    function foo(Test $arg) {}\n}\nclass test3 extends test {\n    function foo($arg) {}\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
