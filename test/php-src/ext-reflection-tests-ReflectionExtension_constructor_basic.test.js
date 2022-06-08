// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_constructor_basic.phpt
  it("ReflectionExtension::__construct()", function () {
    expect(parser.parseCode("<?php\n$obj = new ReflectionExtension('reflection');\n$test = $obj instanceof ReflectionExtension;\nvar_dump($test);\n?>")).toMatchSnapshot();
  });
});
