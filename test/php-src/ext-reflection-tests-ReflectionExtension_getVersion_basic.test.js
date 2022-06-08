// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_getVersion_basic.phpt
  it("ReflectionExtension::getVersion()", function () {
    expect(parser.parseCode("<?php\n$obj = new ReflectionExtension('reflection');\n$var = $obj->getVersion() ? $obj->getVersion() : null;\nvar_dump($var);\n?>")).toMatchSnapshot();
  });
});
