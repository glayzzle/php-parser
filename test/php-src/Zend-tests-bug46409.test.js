// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46409.phpt
  it("Bug #46409 (__invoke method called outside of object context when using array_map)", function () {
    expect(parser.parseCode("<?php\nclass Callback {\n    protected $val = 'hello, world';\n    public function __invoke() {\n        return $this->val;\n    }\n}\n$cb = new Callback();\necho $cb(),\"\\n\";\n$a = array(1, 2);\n$b = array_map($cb, $a);\nprint_r($b);\n?>")).toMatchSnapshot();
  });
});
