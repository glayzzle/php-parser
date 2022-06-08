// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/018.phpt
  it("Reflection::getModifierNames", function () {
    expect(parser.parseCode("<?php\nvar_dump(Reflection::getModifierNames(ReflectionMethod::IS_FINAL | ReflectionMethod::IS_PROTECTED));\n?>")).toMatchSnapshot();
  });
});
