// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_isDeprecated_basic.phpt
  it("ReflectionFunction::isDeprecated", function () {
    expect(parser.parseCode("<?php\n// We currently don't have any deprecated functions :/\n$rc = new ReflectionFunction('var_dump');\nvar_dump($rc->isDeprecated());\n?>")).toMatchSnapshot();
  });
});
