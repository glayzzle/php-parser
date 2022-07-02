// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70987.phpt
  it("Bug #70987 (static::class within Closure::call() causes segfault)", function () {
    expect(parser.parseCode("<?php\nclass foo {}\n$bar = function () {\n   return static::class;\n};\nvar_dump($bar->call(new foo));\n?>")).toMatchSnapshot();
  });
});
