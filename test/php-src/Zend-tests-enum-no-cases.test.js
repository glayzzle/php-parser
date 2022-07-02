// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-cases.phpt
  it("Enum no manual cases method", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    public static function cases(): array {\n        return [];\n    }\n}\n?>")).toMatchSnapshot();
  });
});
