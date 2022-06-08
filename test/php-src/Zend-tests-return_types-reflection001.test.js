// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/reflection001.phpt
  it("Return type and Reflection::export()", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function foo(array $a): array {\n        return $a;\n    }\n}\necho new ReflectionClass(\"A\");\n?>")).toMatchSnapshot();
  });
});
