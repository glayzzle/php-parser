// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41633_2.phpt
  it("Bug #41633.2 (Undefined class constants must not be substituted by strings)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const A = self::B;\n}\necho Foo::A.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
