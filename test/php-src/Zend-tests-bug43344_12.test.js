// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_12.phpt
  it("Bug #43344.12 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\nfunction f($a=array(namespace\\bar)) {\n    return $a[0];\n}\necho f().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
