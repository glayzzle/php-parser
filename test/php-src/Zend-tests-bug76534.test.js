// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76534.phpt
  it("Bug #76534 (PHP hangs on 'illegal string offset on string references with an error handler)", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function ($severity, $message, $file, $line) {\n    throw new \\Exception($message);\n});\n$x = \"foo\";\n$y = &$x[\"2bar\"];\n?>")).toMatchSnapshot();
  });
});
