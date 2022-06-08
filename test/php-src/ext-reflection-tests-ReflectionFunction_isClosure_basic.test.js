// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_isClosure_basic.phpt
  it("Reflection::isClosure", function () {
    expect(parser.parseCode("<?php\n$closure = function($param) { return \"this is a closure\"; };\n$rc = new ReflectionFunction($closure);\nvar_dump($rc->isClosure());\n?>")).toMatchSnapshot();
  });
});
