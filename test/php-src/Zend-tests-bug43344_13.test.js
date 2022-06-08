// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_13.phpt
  it("Bug #43344.13 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\nfunction f($a=array(namespace\\bar=>0)) {\n    reset($a);\n    return key($a);\n}\necho f().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
