// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63462.phpt
  it("Test script to verify that magic methods should be called only once when accessing an unset property.", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public    $publicProperty;\n    protected $protectedProperty;\n    private   $privateProperty;\n    public function __construct() {\n        unset(\n            $this->publicProperty,\n            $this->protectedProperty,\n            $this->privateProperty\n        );\n    }\n    function __get($name) {\n        echo '__get ' . $name . \"\\n\";\n        return $this->$name;\n    }\n    function __set($name, $value) {\n        echo '__set ' . $name . \"\\n\";\n        $this->$name = $value;\n    }\n    function __isset($name) {\n        echo '__isset ' . $name . \"\\n\";\n        return isset($this->$name);\n    }\n}\n$test = new Test();\n$test->nonExisting;\n$test->publicProperty;\n$test->protectedProperty;\n$test->privateProperty;\nisset($test->nonExisting);\nisset($test->publicProperty);\nisset($test->protectedProperty);\nisset($test->privateProperty);\n$test->nonExisting       = 'value';\n$test->publicProperty\t = 'value';\n$test->protectedProperty = 'value';\n$test->privateProperty   = 'value';\n?>")).toMatchSnapshot();
  });
});
