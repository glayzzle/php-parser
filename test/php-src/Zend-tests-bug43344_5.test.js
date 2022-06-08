// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_5.phpt
  it("Bug #43344.5 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nfunction f($a=array(Foo::bar=>0)) {\n    reset($a);\n    return key($a);\n}\necho f().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
