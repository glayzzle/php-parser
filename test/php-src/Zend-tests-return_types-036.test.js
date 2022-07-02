// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/036.phpt
  it("__toString can only declare string return type", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __toString(): bool {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
