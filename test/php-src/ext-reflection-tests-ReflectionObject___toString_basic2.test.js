// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject___toString_basic2.phpt
  it("ReflectionObject::__toString() : very basic test with dynamic properties", function () {
    expect(parser.parseCode("<?php\nclass Foo  {\n    public $bar = 1;\n}\n$f = new foo;\n$f->dynProp = 'hello';\n$f->dynProp2 = 'hello again';\necho new ReflectionObject($f);\n?>")).toMatchSnapshot();
  });
});
