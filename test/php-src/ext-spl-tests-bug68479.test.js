// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug68479.phpt
  it("Bug #68479 (Escape parameter missing from SplFileObject::fputcsv)", function () {
    expect(parser.parseCode("<?php\n$method = new ReflectionMethod('SplFileObject', 'fputcsv');\n$params = $method->getParameters();\nvar_dump($params);\n?>")).toMatchSnapshot();
  });
});
