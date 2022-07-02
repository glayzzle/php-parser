// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug53632.phpt
  it("zend_strtod() hangs with 2.2250738585072011e-308", function () {
    expect(parser.parseCode("<?php\n$d = 2.2250738585072011e-308;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
