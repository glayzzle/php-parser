// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/unserialize.phpt
  it("Enum unserialize", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    case Quux;\n}\n$bar = unserialize('E:7:\"Foo:Bar\";');\nvar_dump($bar);\nvar_dump($bar === Foo::Bar);\n$quux = unserialize('E:8:\"Foo:Quux\";');\nvar_dump($quux);\nvar_dump($quux === Foo::Quux);\n?>")).toMatchSnapshot();
  });
});
