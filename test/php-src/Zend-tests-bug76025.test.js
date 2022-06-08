// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76025.phpt
  it("Bug #76025 (Segfault while throwing exception in error_handler)", function () {
    expect(parser.parseCode("<?php\nfunction handleError($errno, $errstr, $errfile, $errline) {\n    $exception = new exception(\"blah\");\n    throw $exception;\n}\nset_error_handler('handleError', E_ALL);\n$c = $b[$a];\n?>")).toMatchSnapshot();
  });
});
