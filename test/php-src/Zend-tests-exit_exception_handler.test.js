// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exit_exception_handler.phpt
  it("Exception handler should not be invoked for exit()", function () {
    expect(parser.parseCode("<?php\nset_exception_handler(function($e) {\n    var_dump($e);\n});\nexit(\"Exit\\n\");\n?>")).toMatchSnapshot();
  });
});
