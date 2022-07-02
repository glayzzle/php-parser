// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63206_2.phpt
  it("Bug #63206 Fully support exception_handler stacking, even with null", function () {
    expect(parser.parseCode("<?php\nset_exception_handler(function() {\n    echo 'First handler' . PHP_EOL;\n});\nset_exception_handler(function() {\n    echo 'Second handler' . PHP_EOL;\n});\nset_exception_handler(null);\nset_exception_handler(function() {\n    echo 'Fourth handler' . PHP_EOL;\n});\nrestore_exception_handler();\nrestore_exception_handler();\nthrow new Exception();\n?>")).toMatchSnapshot();
  });
});
