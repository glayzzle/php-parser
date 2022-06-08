// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug75434.phpt
  it("Bug #75434 Wrong reflection for mysqli_fetch_all function", function () {
    expect(parser.parseCode("<?php\n$rf = new ReflectionFunction('mysqli_fetch_all');\nvar_dump($rf->getNumberOfParameters());\nvar_dump($rf->getNumberOfRequiredParameters());\n$rm = new ReflectionMethod('mysqli_result', 'fetch_all');\nvar_dump($rm->getNumberOfParameters());\nvar_dump($rm->getNumberOfRequiredParameters());\n?>")).toMatchSnapshot();
  });
});
