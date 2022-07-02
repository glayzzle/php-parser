// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/deprecation_to_exception_during_inheritance.phpt
  it("Deprecation promoted to exception should result in fatal error during inheritance", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $message) {\n    throw new Exception($message);\n});\n$class = new class extends DateTime {\n    public function getTimezone() {}\n};\n?>")).toMatchSnapshot();
  });
});
