// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation13.phpt
  it("Test array_map() function : usage variations - callback function with different return types", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing different callback function returning:\n *   int, string, bool, null values\n */\necho \"*** Testing array_map() : callback with diff return value ***\\n\";\n$array1 = array(1, 2, 3);\n$array2 = array(3, 4, 5);\necho \"-- with integer return value --\\n\";\nfunction callback_int($a, $b)\n{\n  return $a + $b;\n}\nvar_dump( array_map('callback_int', $array1, $array2));\necho \"-- with string return value --\\n\";\nfunction callback_string($a, $b)\n{\n  return \"$a\".\"$b\";\n}\nvar_dump( array_map('callback_string', $array1, $array2));\necho \"-- with bool return value --\\n\";\nfunction callback_bool($a, $b)\n{\n  return TRUE;\n}\nvar_dump( array_map('callback_bool', $array1, $array2));\necho \"-- with null return value --\\n\";\nfunction callback_null($array1)\n{\n  return NULL;\n}\nvar_dump( array_map('callback_null', $array1));\necho \"-- with no return value --\\n\";\nfunction callback_without_ret($arr1)\n{\n  echo \"callback_without_ret called\\n\";\n}\nvar_dump( array_map('callback_without_ret', $array1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
