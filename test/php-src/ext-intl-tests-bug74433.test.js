// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug74433.phpt
  it("Bug #74433 Wrong reflection on the Normalizer methods", function () {
    expect(parser.parseCode("<?php\n$rm = new ReflectionMethod(Normalizer::class, 'isNormalized');\nvar_dump($rm->getNumberOfParameters());\nvar_dump($rm->getNumberOfRequiredParameters());\n$rm = new ReflectionMethod(Normalizer::class, 'normalize');\nvar_dump($rm->getNumberOfParameters());\nvar_dump($rm->getNumberOfRequiredParameters());\n?>")).toMatchSnapshot();
  });
});
