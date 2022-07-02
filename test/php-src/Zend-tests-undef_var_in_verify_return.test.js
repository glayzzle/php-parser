// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/undef_var_in_verify_return.phpt
  it("Throwing undef var in verify return", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function(int $severity, string $message, string $filename, int $lineNumber): void {\n    throw new ErrorException($message, 0, $severity, $filename, $lineNumber);\n});\nfunction test(): string {\n    return $test;\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
