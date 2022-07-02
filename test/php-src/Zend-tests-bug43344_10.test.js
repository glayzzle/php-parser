// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_10.phpt
  it("Bug #43344.10 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\necho namespace\\bar.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
