// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30998.phpt
  it("Bug #30998 (Crash when user error handler returns false)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(-1);\nfunction my_error($errno, $errstr, $errfile, $errline)\n{\n        print \"$errstr ($errno) in $errfile:$errline\\n\";\n        return false;\n}\nset_error_handler('my_error');\n$f = fopen(\"/tmp/blah\", \"r\");\n?>")).toMatchSnapshot();
  });
});
