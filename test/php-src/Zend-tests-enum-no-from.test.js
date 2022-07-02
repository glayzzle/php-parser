// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-from.phpt
  it("Enum no manual from method", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 0;\n    public static function from(string|int $value): self {\n        return $this;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
