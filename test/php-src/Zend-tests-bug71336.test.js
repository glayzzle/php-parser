// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71336.phpt
  it("Bug #71336 (Wrong is_ref on properties as exposed via get_object_vars())", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    protected $bar = array('baz');\n    function bar()\n    {\n        array_pop($this->bar);\n        $vars = get_object_vars($this);\n        $this->bar[] = array('buz');\n        print_r($vars);\n    }\n    function foo() {\n        array_pop($this->bar);\n        $dummy = &$this->bar;\n        $vars = get_object_vars($this);\n        $this->bar[] = array('buz');\n        print_r($vars);\n    }\n}\n(new A())->bar();\n(new A())->foo();\n?>")).toMatchSnapshot();
  });
});
