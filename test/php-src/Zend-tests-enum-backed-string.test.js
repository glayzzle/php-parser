// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-string.phpt
  it("String enum value", function () {
    expect(parser.parseCode("<?php\nenum Foo: string {\n    case Bar = 'bar';\n    case Baz = 'baz';\n}\necho Foo::Bar->value . \"\\n\";\necho Foo::Baz->value . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
