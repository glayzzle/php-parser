// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38211.phpt
  it("Bug #38211 (variable name and cookie name match breaks script execution)", function () {
    expect(parser.parseCode("<?php\n$test = 'test';\nunset($$test);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
