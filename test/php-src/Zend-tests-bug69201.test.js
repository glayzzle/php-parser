// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69201.phpt
  it("Bug #69201 (Memory leak using iterator and get by reference on PHP 7)", function () {
    expect(parser.parseCode("<?php\nclass Entity\n{\n    protected $_properties = [];\n    public function &__get($property)\n    {\n        $value = null;\n        return $value;\n    }\n    public function __set($property, $value)\n    {\n    }\n}\n$e = new Entity;\n$e->a += 1;\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
