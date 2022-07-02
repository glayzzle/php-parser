// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_2.phpt
  it("Bug #43344.2 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\necho Foo::bar.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
