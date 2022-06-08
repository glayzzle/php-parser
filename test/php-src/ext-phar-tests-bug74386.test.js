// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug74386.phpt
  it("Phar: bug #74386: Phar::__construct(): wrong number of parameters by reflection", function () {
    expect(parser.parseCode("<?php\n$r = new ReflectionMethod(Phar::class, '__construct');\nvar_dump($r->getNumberOfRequiredParameters());\nvar_dump($r->getNumberOfParameters());\n$r = new ReflectionMethod(PharData::class, '__construct');\nvar_dump($r->getNumberOfRequiredParameters());\nvar_dump($r->getNumberOfParameters());\n?>")).toMatchSnapshot();
  });
});
