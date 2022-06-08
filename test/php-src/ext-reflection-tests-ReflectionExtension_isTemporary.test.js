// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_isTemporary.phpt
  it("ReflectionExtension::isTemporary()", function () {
    expect(parser.parseCode("<?php\n$obj = new ReflectionExtension('reflection');\nvar_dump($obj->isTemporary());\n?>")).toMatchSnapshot();
  });
});
