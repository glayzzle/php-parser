// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/abstract_method_8.phpt
  it("Abstract method in trait using \"self\"", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    abstract private function method(self $x): self;\n}\nclass C {\n    use T;\n    private function method(self $x): self {\n        return $this;\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
