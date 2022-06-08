// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_9.phpt
  it("Bug #43344.9 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nfunction f($a=array(namespace\\bar=>0)) {\n    reset($a);\n    return key($a);\n}\necho f().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
