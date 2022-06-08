// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug31185.phpt
  it("Bug #31185 (Crash when exceptions thrown from ArrayAccess::offsetUnset())", function () {
    expect(parser.parseCode("<?php\nclass FooBar implements ArrayAccess {\n    private $array = array();\n    public function offsetExists($index): bool {\n        return isset($this->array[$index]);\n    }\n    public function offsetGet($index): mixed {\n        return $this->array[$index];\n    }\n    public function offsetSet($index, $value): void {\n        echo __METHOD__ . \"($index, $value)\\n\";\n        $this->array[$index] = $value;\n    }\n    public function offsetUnset($index): void {\n        throw new Exception('FAIL');\n        unset($this->array[$index]);\n    }\n}\n$i = 0; $j = 0;\n$foo = new FooBar();\n$foo[$j++] = $i++;\n$foo[$j++] = $i++;\n$foo[$j++] = $i++;\ntry\n{\n    unset($foo[1]);\n}\ncatch (Exception $e)\n{\n    echo \"CAUGHT: \" . $e->getMessage() . \"\\n\";\n}\nprint_R($foo);\n?>")).toMatchSnapshot();
  });
});
