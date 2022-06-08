// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug75318.phpt
  it("Bug #75318 (The parameter of UConverter::getAliases() is not optional)", function () {
    expect(parser.parseCode("<?php\n$rm = new ReflectionMethod('UConverter', 'getAliases');\nvar_dump($rm->getNumberOfRequiredParameters());\n?>")).toMatchSnapshot();
  });
});
