// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_uassoc_variation10.phpt
  it("Test array_intersect_uassoc() function : usage variation - Passing class/object methods to callback", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_uassoc() : usage variation ***\\n\";\n//Initialize variables\n$array1 = array(\"a\" => \"green\", \"c\" => \"blue\", \"red\");\n$array2 = array(\"a\" => \"green\", \"yellow\", \"red\");\n// define some class with method\nclass MyClass\n{\n    static function static_compare_func($a, $b) {\n        return strcasecmp($a, $b);\n    }\n    public function class_compare_func($a, $b) {\n        return strcasecmp($a, $b);\n    }\n}\necho \"\\n-- Testing array_intersect_uassoc() function using class with static method as callback --\\n\";\nvar_dump( array_intersect_uassoc($array1, $array2, array('MyClass','static_compare_func')) );\nvar_dump( array_intersect_uassoc($array1, $array2, 'MyClass::static_compare_func'));\necho \"\\n-- Testing array_intersect_uassoc() function using class with regular method as callback --\\n\";\n$obj = new MyClass();\nvar_dump( array_intersect_uassoc($array1, $array2, array($obj,'class_compare_func')) );\n?>")).toMatchSnapshot();
  });
});
