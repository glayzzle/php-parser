// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/abstract_method_4.phpt
  it("Visibility enforcement on abstract trait methods", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    abstract public function method(int $a, string $b);\n}\nclass C {\n    use T;\n    /* For backwards-compatibility reasons, visibility is not enforced here. */\n    private function method(int $a, string $b) {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
