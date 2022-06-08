// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug45805.phpt
  it("Bug #45805 (Crash on throwing exception from error handler)", function () {
    expect(parser.parseCode("<?php\nclass PHPUnit_Util_ErrorHandler\n{\n    public static function handleError($errno, $errstr, $errfile, $errline)\n    {\n        throw new RuntimeException;\n    }\n}\nclass A {\n    public function getX() {\n        return NULL;\n    }\n}\nclass B {\n    public function foo() {\n        $obj    = new A;\n        $source = &$obj->getX();\n    }\n    public function bar() {\n        $m = new ReflectionMethod('B', 'foo');\n        $m->invoke($this);\n    }\n}\nset_error_handler(\n  array('PHPUnit_Util_ErrorHandler', 'handleError'), E_ALL\n);\n$o = new B;\n$o->bar();\n?>")).toMatchSnapshot();
  });
});
