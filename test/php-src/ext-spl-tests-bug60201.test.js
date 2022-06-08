// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug60201.phpt
  it("Bug #60201 (SplFileObject::setCsvControl does not expose third argument via Reflection)", function () {
    expect(parser.parseCode("<?php\n$method = new ReflectionMethod('SplFileObject', 'setCsvControl');\n$params = $method->getParameters();\nvar_dump($params);\n?>")).toMatchSnapshot();
  });
});
