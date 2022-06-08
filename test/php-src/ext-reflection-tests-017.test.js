// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/017.phpt
  it("ReflectionClass::__toString() (constants)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const test = \"ok\";\n}\n$class = new ReflectionClass(\"Foo\");\necho $class;\n?>")).toMatchSnapshot();
  });
});
