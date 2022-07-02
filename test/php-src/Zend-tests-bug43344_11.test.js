// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_11.phpt
  it("Bug #43344.11 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\nfunction f($a=namespace\\bar) {\n    return $a;\n}\necho f().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
