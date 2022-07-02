// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79818.phpt
  it("Bug #79818: BIND_STATIC frees old variable value too early", function () {
    expect(parser.parseCode("<?php\nfunction test($a) {\n    static $a = UNDEFINED;\n}\ntest(new stdClass);\n?>")).toMatchSnapshot();
  });
});
