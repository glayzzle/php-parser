// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64578.phpt
  it("Bug #64578 (debug_backtrace in set_error_handler corrupts zend heap: segfault)", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($no, $err) { var_dump($err); });\nfunction x($s) { $s['2a'] = 1; };\n$y = '1';\nx($y);\nprint_r($y);\n?>")).toMatchSnapshot();
  });
});
