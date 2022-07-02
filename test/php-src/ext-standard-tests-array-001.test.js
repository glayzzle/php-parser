// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/001.phpt
  it("Test array_merge and array_walk", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/data.inc');\n/*\n** Create sample arrays\n** Test alpha, numeric (decimal, hex, octal) and special data\n**\n**\n*/\n/* Helper function to build testing arrays */\nfunction make_nested_array ($depth, $breadth, $function = NULL, $args = array ()) {\n    for ($x = 0; $x < $breadth; ++$x) {\n        if (NULL === $function) {\n            $array = array (0);\n        } else {\n            $array = array (call_user_func_array ($function, $args));\n        }\n        for ($y = 1; $y < $depth; ++$y) {\n            $array[0] = array ($array[0]);\n        }\n        $temp[$x] = $array;\n    }\n    return $temp;\n}\n/* Nested array */\n$data2 = make_nested_array (3, 3);\n$data = array_merge($data, $data2);\nvar_dump ($data);\nfunction echo_kv ($value, $key) {\n    var_dump ($key);\n    var_dump ($value);\n}\necho \" -- Testing array_walk() -- \\n\";\narray_walk ($data, 'echo_kv');\n?>")).toMatchSnapshot();
  });
});
