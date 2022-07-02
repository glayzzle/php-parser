// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41633_4.phpt
  it("Bug #41633.4 (self:: doesn't work for constants)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const A = self::B;\n    const B = \"ok\";\n}\nvar_dump(defined(\"Foo::A\"));\n?>")).toMatchSnapshot();
  });
});
