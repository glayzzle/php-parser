// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/rfc001.phpt
  it("RFC example: returned type does not match the type declaration", function () {
    expect(parser.parseCode("<?php\nfunction get_config(): array {\n    return 42;\n}\nget_config();\n?>")).toMatchSnapshot();
  });
});
