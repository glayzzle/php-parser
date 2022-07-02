// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/random/reflection.phpt
  it("Bug #74708 Wrong reflection on random_bytes and random_int", function () {
    expect(parser.parseCode("<?php\n$rf = new ReflectionFunction('random_bytes');\nvar_dump($rf->getNumberOfParameters());\nvar_dump($rf->getNumberOfRequiredParameters());\n$rf = new ReflectionFunction('random_int');\nvar_dump($rf->getNumberOfParameters());\nvar_dump($rf->getNumberOfRequiredParameters());\n?>")).toMatchSnapshot();
  });
});
