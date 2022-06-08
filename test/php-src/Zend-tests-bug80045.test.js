// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80045.phpt
  it("Bug #80045: memleak after two set_exception_handler calls with __call", function () {
    expect(parser.parseCode("<?php\nclass x {\n    public function __construct(){\n        set_exception_handler([$this, 'dummyExceptionHandler']);\n        set_exception_handler([$this, 'dummyExceptionHandler']);\n        set_error_handler([$this, 'dummyErrorHandler']);\n        set_error_handler([$this, 'dummyErrorHandler']);\n    }\n    public function __call($m, $p) {}\n}\nnew x;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
