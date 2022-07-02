// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70630.phpt
  it("Bug #70630 (Closure::call/bind() crash with ReflectionFunction->getClosure())", function () {
    expect(parser.parseCode("<?php\nclass a {}\n$x = (new ReflectionFunction(\"substr\"))->getClosure();\n$x->call(new a);\n?>")).toMatchSnapshot();
  });
});
