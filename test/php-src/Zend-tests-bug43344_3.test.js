// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_3.phpt
  it("Bug #43344.3 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nfunction f($a=Foo::bar) {\n    return $a;\n}\necho f().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
