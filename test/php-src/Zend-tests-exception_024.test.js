// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_024.phpt
  it("zend.exception_string_param_max_len ini setting", function () {
    expect(parser.parseCode("<?php\nfunction main($arg) {\n    throw new Exception();\n}\nmain('123456789012345678901234567890');\n?>")).toMatchSnapshot();
  });
});
