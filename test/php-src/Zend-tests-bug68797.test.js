// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68797.phpt
  it("Bug #68797 Number 2.2250738585072012e-308 converted incorrectly", function () {
    expect(parser.parseCode("<?php\necho 2.2250738585072012e-308, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
