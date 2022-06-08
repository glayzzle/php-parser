// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/record_errors_001.phpt
  it("Error recording in error handler", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $msg) {\n\techo \"Error: $msg\\n\";\n    new class extends DateTime {\n    };\n});\nnew class extends DateTime {\n    function getTimezone() {}\n};\n?>")).toMatchSnapshot();
  });
});
