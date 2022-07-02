// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81192.phpt
  it("Bug #81192: \"Declaration should be compatible with\" gives incorrect line number with traits", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/bug81192_trait.inc';\nclass A {\n    public function foo(): int {\n        return 2;\n    }\n}\nclass B extends A {\n    use T;\n}\n?>")).toMatchSnapshot();
  });
});
