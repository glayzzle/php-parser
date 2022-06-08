// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71914.phpt
  it("Bug #71914 (Reference is lost in \"switch\")", function () {
    expect(parser.parseCode("<?php\nfunction bug(&$value) {\n    switch ($value) {\n    case \"xxxx\":\n        $value = true;\n        break;\n    }\n}\nfunction returnArray() {\n    $array = array();\n    $array[\"str\"]  = \"xxxx\";\n    return $array;\n}\nclass Foo {\n    public $array = array(\"str\" => \"xxxx\");\n}\nfunction test($arr, &$dummy) {\n    bug($arr[\"str\"]);\n    var_dump($arr[\"str\"]);\n}\n$foo = new Foo();\n$arr = returnArray();\n$array = array(\"str\" => \"xxxx\");\ntest($array, $array[\"str\"]);\ntest($arr, $arr[\"str\"]);\ntest($foo->array, $foo->array[\"str\"]);\n?>")).toMatchSnapshot();
  });
});
