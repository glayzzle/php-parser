// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/key_exists_variation2.phpt
  it("Test function key_exists() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** test key_exists() by using mixed type of arrays ***\\n\";\n// there is not a index = 0 element\n$a = array(1 => 'bar', 'foo' => 'baz');\nvar_dump(key_exists(0, $a));\necho \"integer\\n\";\n// 1 has index = 0\n$b = array(1, 'foo' => 'baz');\nvar_dump(key_exists(0, $b));\n// 42 has index = 0, netherless its position is the latest\n$c = array('foo' => 'baz', 42);\nvar_dump(key_exists(0, $c));\necho \"string\\n\";\n// 'bar' has index = 0, netherless it is a string\n$d = array('bar', 'foo' => 'baz');\nvar_dump(key_exists(0, $d));\n// 'baz' has index = 0, netherless its position is the latest\n$e = array('foo' => 'baz', 'baz');\nvar_dump(key_exists(0, $e));\necho \"obj\\n\";\nclass ObjectA\n{\n  public $foo = 'bar';\n}\n$obj = new ObjectA();\n// object has index = 0, netherless its position is the latest\n$f = array('foo' => 'baz', $obj);\nvar_dump(key_exists(0, $f));\n// object has index = 0, netherless its position is the first\n$g = array($obj, 'foo' => 'baz');\nvar_dump(key_exists(0, $g));\necho \"stream resource\\n\";\n// stream resource has index = 0, netherless its position is the first\n$st = fopen('php://memory', '+r');\n$h = array($st, 'foo' => 'baz');\nvar_dump(key_exists(0, $h));\n// stream resource has index = 0, netherless its position is the latest\n$i = array('foo' => 'baz', $st);\nvar_dump(key_exists(0, $i));\n?>")).toMatchSnapshot();
  });
});
