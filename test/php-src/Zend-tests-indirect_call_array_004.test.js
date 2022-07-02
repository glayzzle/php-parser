// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_call_array_004.phpt
  it("Indirect method call by array - Testing exception and method magics", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    static public function abc() {\n        throw new Exception('foo');\n    }\n    public function __call($a, $b) {\n        printf(\"From %s:\\n\", __METHOD__);\n        throw new Exception($a);\n    }\n    static public function __callStatic($a, $b) {\n        printf(\"From %s:\\n\", __METHOD__);\n        throw new Exception($a);\n    }\n}\n$arr = array('foo', 'abc');\ntry {\n    $arr();\n}\ncatch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$arr = array('foo', '123');\ntry {\n    $arr();\n}\ncatch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"------\\n\";\n$foo = new foo;\n$arr = array($foo, 'abc');\ntry {\n    $arr();\n}\ncatch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$foo = new foo;\n$arr = array($foo, '123');\ntry {\n    $arr();\n}\ncatch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
