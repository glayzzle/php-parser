// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_6.phpt
  it("Bug #43344.6 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\necho namespace\\bar.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
