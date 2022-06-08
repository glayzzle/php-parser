// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/result_unused.phpt
  it("Unused result of fetch operations", function () {
    expect(parser.parseCode("<?php\n$x = array(1);\n$a = \"x\";\n$$a;\n$x = array(array(2));\n$x[0];\n$x = \"str\";\n$x[0];\n$x[3];\nclass Foo {\n    public $prop = array(3);\n    function __get($name) {\n        return array(4);\n    }\n}\n$x = new Foo();\n$x->prop;\n$x->y;\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
