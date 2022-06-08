// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/014.phpt
  it("ReflectionExtension::getConstants()", function () {
    expect(parser.parseCode("<?php\n$ext = new ReflectionExtension(\"standard\");\n$consts = $ext->getConstants();\nvar_dump($consts[\"CONNECTION_NORMAL\"]);\n?>")).toMatchSnapshot();
  });
});
