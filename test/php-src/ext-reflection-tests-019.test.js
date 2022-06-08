// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/019.phpt
  it("ReflectionFunction::getExtensionName", function () {
    expect(parser.parseCode("<?php\n$f = new ReflectionFunction(\"sleep\");\nvar_dump($f->getExtensionName());\n?>")).toMatchSnapshot();
  });
});
