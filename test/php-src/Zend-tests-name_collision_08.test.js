// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/name_collision_08.phpt
  it("Function declaration colliding with import (in namespace)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo {\n    function bar() {}\n}\nnamespace Bazzle {\n    use function Foo\\bar;\n    function bar() {}\n}\n?>")).toMatchSnapshot();
  });
});
