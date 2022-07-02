// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78239.phpt
  it("Bug #78239: Deprecation notice during string conversion converted to exception hangs", function () {
    expect(parser.parseCode("<?php\nfunction handleError($level, $message, $file = '', $line = 0, $context = [])\n{\n    throw new ErrorException($message, 0, $level, $file, $line);\n}\nset_error_handler('handleError');\n$r = new _ZendTestClass;\n(string)$r ?: \"\";\n?>")).toMatchSnapshot();
  });
});
