// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/add_optional_by_ref_arg.phpt
  it("Adding an optional by-ref arg in a child method", function () {
    expect(parser.parseCode("<?php\nclass Test1 {\n    public function method1() {\n        $this->method2($x);\n        var_dump($x);\n    }\n    public function method2() {}\n}\nclass Test2 extends Test1 {\n    public function method2(&$x = null) {\n        ++$x;\n    }\n}\n(new Test2)->method1();\n?>")).toMatchSnapshot();
  });
});
