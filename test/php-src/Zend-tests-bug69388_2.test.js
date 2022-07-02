// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69388_2.phpt
  it("Bug #69388 - Variation", function () {
    expect(parser.parseCode("<?php\nfunction handle_error($code, $message, $file, $line) {\n    eval('namespace Foo;');\n    echo \"$message\\n\";\n}\nset_error_handler('handle_error');\neval('namespace {use Exception;}');\n?>")).toMatchSnapshot();
  });
});
