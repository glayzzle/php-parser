// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/property_access_errors_for_guarded_properties.phpt
  it("Property access errors should be thrown for overloaded properties protected by recursion guards", function () {
    expect(parser.parseCode("<?php\nfunction setProp($obj) {\n    $obj->prop = 42;\n}\nfunction getProp($obj) {\n    var_dump($obj->prop);\n}\nfunction unsetProp($obj) {\n    unset($obj->prop);\n}\nclass Test {\n    private $prop;\n    public function __get($k) {\n        getProp($this);\n    }\n    public function __set($k, $v) {\n        setProp($this);\n    }\n    public function __unset($k) {\n        unsetProp($this);\n    }\n}\n$test = new Test;\ntry {\n    $test->prop = \"bar\";\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($test->prop);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    unset($test->prop);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
