// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_basic.phpt
  it("Test array_map() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_map() : basic functionality ***\\n\";\nfunction multiply($p, $q) {\n  return ($p * $q);\n}\nfunction square($p) {\n  return ($p * $p);\n}\nfunction concatenate($a, $b) {\n  return \"$a = $b\";\n}\n// integer array\n$arr1 = array(1, 2, 3);\n$arr2 = array(4, 5, 6);\necho \"-- With two integer array --\\n\";\nvar_dump( array_map('multiply', $arr1, $arr2) );\necho \"-- With single integer array --\\n\";\nvar_dump( array_map('square', $arr1) );\n// string array\n$arr1 = array(\"one\", \"two\");\n$arr2 = array(\"single\", \"double\");\necho \"-- With string array --\\n\";\nvar_dump( array_map('concatenate', $arr1, $arr2) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
