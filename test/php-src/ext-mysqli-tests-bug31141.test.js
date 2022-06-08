// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug31141.phpt
  it("Bug #31141 (properties declared in the class extending MySQLi are not available)", function () {
    expect(parser.parseCode("<?php\nclass Test extends mysqli\n{\n    public $test = array();\n    function foo()\n    {\n        $ar_test = array(\"foo\", \"bar\");\n        $this->test = &$ar_test;\n    }\n}\n$my_test = new Test;\n$my_test->foo();\nvar_dump($my_test->test);\n?>")).toMatchSnapshot();
  });
});
