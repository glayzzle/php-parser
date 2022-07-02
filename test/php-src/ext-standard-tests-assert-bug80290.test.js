// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/bug80290.phpt
  it("Bug #80290: Double free when ASSERT_CALLBACK is used with a dynamic message", function () {
    expect(parser.parseCode("<?php\nassert_options(ASSERT_CALLBACK, function($file, $line, $unused, $message) {\n    var_dump($message);\n});\n$x = 'x';\nassert(false, 'Dynamic message: ' . $x);\n?>")).toMatchSnapshot();
  });
});
