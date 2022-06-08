// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug51394.phpt
  it("Bug #51394 (Error line reported incorrectly if error handler throws an exception)", function () {
    expect(parser.parseCode("<?php\nfunction eh()\n{\n    throw new Exception(\"error!\");\n    return false;\n}\nset_error_handler(\"eh\");\n$a = $empty($b);\n?>")).toMatchSnapshot();
  });
});
