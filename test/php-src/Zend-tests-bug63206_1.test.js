// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63206_1.phpt
  it("Bug #63206 Fully support error_handler stacking, even with null", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() {\n    echo 'First handler' . PHP_EOL;\n});\nset_error_handler(function() {\n    echo 'Second handler' . PHP_EOL;\n});\nset_error_handler(null);\nset_error_handler(function() {\n    echo 'Fourth handler' . PHP_EOL;\n});\nrestore_error_handler();\nrestore_error_handler();\n$triggerNotice++;\n?>")).toMatchSnapshot();
  });
});
