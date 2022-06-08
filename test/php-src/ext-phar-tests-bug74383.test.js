// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug74383.phpt
  it("Phar: bug #74383: Wrong reflection on Phar::running", function () {
    expect(parser.parseCode("<?php\n$rc = new ReflectionClass(Phar::class);\n$rm = $rc->getMethod(\"running\");\necho $rm->getNumberOfParameters();\necho PHP_EOL;\necho $rm->getNumberOfRequiredParameters();\necho PHP_EOL;\necho (int) $rm->getParameters()[0]->isOptional();\n?>")).toMatchSnapshot();
  });
});
