// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/parameter_type_variance_2.phpt
  it("Parameter variance with no type (builtin)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function testParentBuiltin(int $foo) {}\n    function testBothBuiltin(int $foo) {}\n    function testChildBuiltin($foo) {}\n    function testNoneBuiltin($foo) {}\n}\nclass Bar extends Foo {\n    function testParentBuiltin($foo) {}\n    function testBothBuiltin(int $foo) {}\n    function testChildBuiltin(int $foo) {}\n    function testNoneBuiltin($foo) {}\n}\n?>")).toMatchSnapshot();
  });
});
