// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/parameter_type_variance.phpt
  it("Parameter variance with no type (class)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function testParentClass(Foo $foo) {}\n    function testBothClass(Foo $foo) {}\n    function testChildClass($foo) {}\n    function testNoneClass($foo) {}\n}\nclass Bar extends Foo {\n    function testParentClass($foo) {}\n    function testBothClass(Foo $foo) {}\n    function testChildClass(Foo $foo) {}\n    function testNoneClass($foo) {}\n}\n?>")).toMatchSnapshot();
  });
});
