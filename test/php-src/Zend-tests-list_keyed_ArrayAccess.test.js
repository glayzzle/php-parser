// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed_ArrayAccess.phpt
  it("list() with keys and ArrayAccess", function () {
    expect(parser.parseCode("<?php\n$antonymObject = new ArrayObject;\n$antonymObject[\"good\"] = \"bad\";\n$antonymObject[\"happy\"] = \"sad\";\nlist(\"good\" => $good, \"happy\" => $happy) = $antonymObject;\nvar_dump($good, $happy);\necho PHP_EOL;\n$stdClassCollection = new SplObjectStorage;\n$foo = new StdClass;\n$stdClassCollection[$foo] = \"foo\";\n$bar = new StdClass;\n$stdClassCollection[$bar] = \"bar\";\nlist($foo => $fooStr, $bar => $barStr) = $stdClassCollection;\nvar_dump($fooStr, $barStr);\necho PHP_EOL;\nclass IndexPrinter implements ArrayAccess\n{\n    public function offsetGet($offset): mixed {\n        echo \"GET \";\n        var_dump($offset);\n        return null;\n    }\n    public function offsetSet($offset, $value): void {\n    }\n    public function offsetExists($offset): bool {\n    }\n    public function offsetUnset($offset): void {\n    }\n}\n$op = new IndexPrinter;\nlist(123 => $x) = $op;\n// PHP shouldn't convert this to an integer offset, because it's ArrayAccess\nlist(\"123\" => $x) = $op;\n?>")).toMatchSnapshot();
  });
});
