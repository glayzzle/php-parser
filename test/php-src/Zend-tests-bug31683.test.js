// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug31683.phpt
  it("Bug #31683 (changes to $name in __get($name) override future parameters)", function () {
    expect(parser.parseCode("<?php\nclass Foo implements ArrayAccess {\n  function __get($test) {\n    var_dump($test);\n    $test = 'bug';\n  }\n  function __set($test, $val) {\n    var_dump($test);\n    var_dump($val);\n    $test = 'bug';\n    $val = 'bug';\n  }\n  function __call($test, $arg) {\n    var_dump($test);\n    $test = 'bug';\n  }\n  function offsetget($test): mixed {\n    var_dump($test);\n    $test = 'bug';\n    return 123;\n  }\n  function offsetset($test, $val): void {\n    var_dump($test);\n    var_dump($val);\n    $test = 'bug';\n    $val  = 'bug';\n  }\n  function offsetexists($test): bool {\n    var_dump($test);\n    $test = 'bug';\n    return true;\n  }\n  function offsetunset($test): void {\n    var_dump($test);\n    $test = 'bug';\n  }\n}\n$foo = new Foo();\n$a = \"ok\";\nfor ($i=0; $i < 2; $i++) {\n  $foo->ok(\"ok\");\n  $foo->ok;\n  $foo->ok = \"ok\";\n  $x = $foo[\"ok\"];\n  $foo[\"ok\"] = \"ok\";\n  isset($foo[\"ok\"]);\n  unset($foo[\"ok\"]);\n//  $foo[];\n  $foo[] = \"ok\";\n//  isset($foo[]);\n//  unset($foo[]);\n  $foo->$a;\n  echo \"---\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
