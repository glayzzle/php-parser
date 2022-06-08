// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cv12.phpt
  it("unset() CV 12 (unset() in indirect called function)", function () {
    expect(parser.parseCode("<?php\n$x = 1;\nfunction foo() {unset($GLOBALS[\"x\"]);}\ncall_user_func(\"foo\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
