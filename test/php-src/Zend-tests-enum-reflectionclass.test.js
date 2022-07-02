// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/reflectionclass.phpt
  it("Enum reflection getConstants()", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    case Baz;\n}\nvar_dump((new \\ReflectionClass(Foo::class))->getConstants());\n?>")).toMatchSnapshot();
  });
});
