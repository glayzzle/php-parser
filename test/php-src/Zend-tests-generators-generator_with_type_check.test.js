// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_with_type_check.phpt
  it("Generator wit type check", function () {
    expect(parser.parseCode("<?php\nfunction gen(array $a) { yield; }\ngen(42);\n?>")).toMatchSnapshot();
  });
});
