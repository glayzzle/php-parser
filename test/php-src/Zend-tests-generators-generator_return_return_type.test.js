// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_return_return_type.phpt
  it("Generators must return a valid variable with return type specified", function () {
    expect(parser.parseCode("<?php\n$gen = (function (): Generator {\n    1 + $a = 1; // force a temporary\n    return true;\n    yield;\n})();\nvar_dump($gen->valid());\nvar_dump($gen->getReturn());\n?>")).toMatchSnapshot();
  });
});
