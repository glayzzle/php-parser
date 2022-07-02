// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_generator.phpt
  it("never return type: not valid as a parameter type", function () {
    expect(parser.parseCode("<?php\nfunction generateList(string $uri): never {\n    yield 1;\n    exit();\n}\n?>")).toMatchSnapshot();
  });
});
