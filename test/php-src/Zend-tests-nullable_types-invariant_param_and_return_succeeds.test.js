// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/invariant_param_and_return_succeeds.phpt
  it("Invariant parameter and return types work with nullable types", function () {
    expect(parser.parseCode("<?php\ninterface A {\n    function method(?int $i): ?int;\n}\nclass B implements A {\n    function method(?int $i): ?int {\n        return $i;\n    }\n}\n$b = new B();\nvar_dump($b->method(null));\nvar_dump($b->method(1));\n?>")).toMatchSnapshot();
  });
});
