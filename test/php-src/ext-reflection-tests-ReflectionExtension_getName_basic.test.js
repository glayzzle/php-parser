// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_getName_basic.phpt
  it("ReflectionExtension::getName()", function () {
    expect(parser.parseCode("<?php\n$obj = new ReflectionExtension('reflection');\nvar_dump($obj->getName());\n?>")).toMatchSnapshot();
  });
});
