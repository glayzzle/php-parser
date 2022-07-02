// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/magic_get_set.phpt
  it("Interaction with magic get/set", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public readonly int $prop;\n    public function unsetProp() {\n        unset($this->prop);\n    }\n    public function __get($name) {\n        echo __METHOD__, \"($name)\\n\";\n        return 1;\n    }\n    public function __set($name, $value) {\n        echo __METHOD__, \"($name, $value)\\n\";\n    }\n    public function __unset($name) {\n        echo __METHOD__, \"($name)\\n\";\n    }\n    public function __isset($name) {\n        echo __METHOD__, \"($name)\\n\";\n        return true;\n    }\n}\n$test = new Test;\n// The property is in uninitialized state, no magic methods should be invoked.\nvar_dump(isset($test->prop));\ntry {\n    var_dump($test->prop);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->prop = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    unset($test->prop);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$test->unsetProp();\nvar_dump(isset($test->prop));\nvar_dump($test->prop);\n$test->prop = 2;\ntry {\n    unset($test->prop);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
