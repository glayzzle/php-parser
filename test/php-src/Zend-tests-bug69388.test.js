// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69388.phpt
  it("Bug #69388: Use after free on recursive calls to PHP compiler", function () {
    expect(parser.parseCode("<?php\nfunction handle_error($code, $message, $file, $line) {\n    if (!function_exists(\"bla\")) {\n        eval('function bla($s) {echo \"$s\\n\";}');\n    }\n    bla($message);\n}\nset_error_handler('handle_error');\neval('namespace {use Exception;}');\n?>")).toMatchSnapshot();
  });
});
