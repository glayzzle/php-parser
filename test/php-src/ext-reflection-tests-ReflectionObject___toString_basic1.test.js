// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject___toString_basic1.phpt
  it("ReflectionObject::__toString() : very basic test with no dynamic properties", function () {
    expect(parser.parseCode("<?php\nclass Foo  {\n    public $bar = 1;\n}\n$f = new foo;\necho new ReflectionObject($f);\n?>")).toMatchSnapshot();
  });
});
