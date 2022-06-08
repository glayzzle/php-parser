// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69167.phpt
  it("Bug #69167 (call_user_func does not support references anymore)", function () {
    expect(parser.parseCode("<?php\nfunction l($m) {\n        echo $m . \"\\n\";\n}\n$cb = 'l';\ncall_user_func($cb, 'hi');\n$cb2 = &$cb;\ncall_user_func($cb2, 'hi2');\n?>")).toMatchSnapshot();
  });
});
