// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_call_array_003.phpt
  it("Indirect method call by array - Calling __call() and __callStatic()", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function __call($a, $b) {\n        printf(\"From %s:\\n\", __METHOD__);\n        var_dump($a);\n        var_dump($this);\n    }\n    static public function __callStatic($a, $b) {\n        printf(\"From %s:\\n\", __METHOD__);\n        var_dump($a);\n        var_dump($this);\n    }\n}\n$arr = array('foo', 'abc');\ntry {\n    $arr();\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n$foo = new foo;\n$arr = array($foo, 'abc');\n$arr();\n?>")).toMatchSnapshot();
  });
});
