// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/prototype_range.phpt
  it("Range information from a prototype method should not be used", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    public function getInt(): int { return 0; }\n    public function getInt2() {\n        return $this->getInt();\n    }\n}\nclass Test2 extends Test {\n    public function getInt(): int { return 1; }\n}\n$test2 = new Test2;\nvar_dump($test2->getInt2());\n?>")).toMatchSnapshot();
  });
});
