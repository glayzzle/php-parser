// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_getFileName.001.phpt
  it("ReflectionFunction::getFileName() with function in an included file", function () {
    expect(parser.parseCode("<?php\ninclude \"included4.inc\";\n$funcInfo = new ReflectionFunction('g');\nvar_dump($funcInfo->getFileName());\n?>")).toMatchSnapshot();
  });
});
