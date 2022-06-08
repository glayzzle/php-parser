// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69427.phpt
  it("Bug #69427 (Segfault on magic method __call of private method in superclass)", function () {
    expect(parser.parseCode("<?php\nclass SubClass extends BaseClass\n{\n}\nabstract class BaseClass\n{\n    public function __call($name, $arguments)\n    {\n        return $this->$name();\n    }\n    private function foobar()\n    {\n        return 'okey';\n    }\n}\n$test = new SubClass();\necho $test->foobar();\n?>")).toMatchSnapshot();
  });
});
