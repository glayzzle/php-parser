// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_isVariadic_basic.phpt
  it("ReflectionFunction::isVariadic()", function () {
    expect(parser.parseCode("<?php\nfunction test1($args) {}\nfunction test2(...$args) {}\nfunction test3($arg, ...$args) {}\nvar_dump((new ReflectionFunction('test1'))->isVariadic());\nvar_dump((new ReflectionFunction('test2'))->isVariadic());\nvar_dump((new ReflectionFunction('test3'))->isVariadic());\n?>")).toMatchSnapshot();
  });
});
