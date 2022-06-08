// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/unset.phpt
  it("Unset readonly property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public readonly int $prop;\n    public function __construct(int $prop) {\n        $this->prop = $prop;\n    }\n}\n$test = new Test(1);\ntry {\n    unset($test->prop);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nclass Test2 {\n    public readonly int $prop;\n    public function __construct() {\n        unset($this->prop); // Unset uninitialized.\n        unset($this->prop); // Unset unset.\n    }\n    public function __get($name) {\n        // Lazy init.\n        echo __METHOD__, \"\\n\";\n        $this->prop = 1;\n        return $this->prop;\n    }\n}\n$test = new Test2;\nvar_dump($test->prop); // Call __get.\nvar_dump($test->prop); // Don't call __get.\ntry {\n    unset($test->prop); // Unset initialized, illegal.\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nclass Test3 {\n    public readonly int $prop;\n}\n$test = new Test3;\ntry {\n    unset($test->prop);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
