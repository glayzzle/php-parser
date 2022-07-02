// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48248.phpt
  it("Bug #48248 (SIGSEGV when access to private property via &__get)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public function & __get($name)\n    {\n        return $this->test;\n    }\n}\nclass B extends A\n{\n    private $test;\n}\n$b = new B;\nvar_dump($b->test);\n?>")).toMatchSnapshot();
  });
});
