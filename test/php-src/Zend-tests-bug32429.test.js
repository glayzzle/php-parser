// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32429.phpt
  it("Bug #32429 (method_exists() always return TRUE if __call method exists)", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public function __construct() {\n        var_dump(method_exists($this, 'test'));\n        if (method_exists($this, 'test')) {\n            $this->test();\n        }\n    }\n    public function __call($name, $args) {\n        throw new Exception('Call to undefined method'.get_class($this).'::'.$name.'()');\n    }\n}\ntry {\n    $test = new TestClass;\n} catch (Exception $e) {\n  exit($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
