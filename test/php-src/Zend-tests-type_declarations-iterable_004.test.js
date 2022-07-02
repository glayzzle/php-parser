// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/iterable_004.phpt
  it("iterable type#004 - Parameter covariance", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function testArray(array $array) {}\n    function testTraversable(Traversable $traversable) {}\n    function testScalar(int $int) {}\n}\nclass Bar extends Foo {\n    function testArray(iterable $iterable) {}\n    function testTraversable(iterable $iterable) {}\n    function testScalar(iterable $iterable) {}\n}\n?>")).toMatchSnapshot();
  });
});
