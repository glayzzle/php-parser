// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/stringable_trait_invalid.phpt
  it("__toString() from trait with invalid return type", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public function __toString(): int {\n        return \"ok\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
