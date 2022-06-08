// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_replace_array_refs2.phpt
  it("Test str_replace() function and array refs, more cases", function () {
    expect(parser.parseCode("<?php\n$closure = function (array $array, array $keys, $value)\n{\n    $current = &$array;\n    foreach ($keys as $key)\n        $current = &$current[$key];\n    $current = $value;\n    return $array;\n};\nclass SomeClass { public $prop; }\n$obj = new SomeClass;\n$obj->prop = ['x' => 'property'];\n$obj->prop = $closure($obj->prop, ['x'], 'a');\nvar_dump(str_replace(array_keys($obj->prop), $obj->prop, \"x property\"));\n$array = ['x' => 'property'];\n$array = $closure($array, ['x'], 'a');\nvar_dump(str_replace(array_keys($array), $array, \"x property\"));\n?>")).toMatchSnapshot();
  });
});
