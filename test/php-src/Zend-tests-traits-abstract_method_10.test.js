// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/abstract_method_10.phpt
  it("Abstract method in trait using \"self\" (invalid)", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    abstract private function method(self $x): self;\n}\nclass C {\n    use T;\n    private function method(int $x): int { }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
