// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_8.phpt
  it("Bug #43344.8 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nfunction f($a=array(namespace\\bar)) {\n    return $a[0];\n}\necho f().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
