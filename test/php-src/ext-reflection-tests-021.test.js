// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/021.phpt
  it("ReflectionClass::hasConstant", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const c1 = 1;\n}\n$class = new ReflectionClass(\"Foo\");\nvar_dump($class->hasConstant(\"c1\"));\nvar_dump($class->hasConstant(\"c2\"));\n?>")).toMatchSnapshot();
  });
});
