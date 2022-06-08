// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug54332.phpt
  it("Bug #54332 (Crash in zend_mm_check_ptr // Heap corruption)", function () {
    expect(parser.parseCode("<?php\necho number_format(1e300, 2006, '', ' ') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
