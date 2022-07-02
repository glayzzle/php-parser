// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70223.phpt
  it("Bug #70223 (Incrementing value returned by magic getter)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $foo = 0;\n    public function &__get($foo){ return $this->foo; }\n}\n$a = new A;\necho $a->f++;\necho $a->f++;\necho $a->f++;\n?>")).toMatchSnapshot();
  });
});
