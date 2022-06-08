// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/default-parameter.phpt
  it("Enum in default parameter", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nfunction baz(Foo $foo = Foo::Bar) {\n    var_dump($foo);\n}\nbaz();\n?>")).toMatchSnapshot();
  });
});
