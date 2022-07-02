// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/constant-aliases.phpt
  it("Enum constants can alias cases", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    const Baz = self::Bar;\n}\nfunction test(Foo $var) {\n    echo \"works\\n\";\n}\ntest(Foo::Bar);\ntest(Foo::Baz);\n?>")).toMatchSnapshot();
  });
});
