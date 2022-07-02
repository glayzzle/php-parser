// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_ukey_variation9.phpt
  it("Test array_intersect_ukey() function : usage variation - Passing class/object methods to callback", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_ukey() : usage variation ***\\n\";\n//Initialise arguments\n$array1 = array('blue'  => 1, 'red'  => 2, 'green'  => 3, 'purple' => 4);\n$array2 = array('green' => 5, 'blue' => 6, 'yellow' => 7, 'cyan'   => 8);\nclass MyClass\n{\n    static function static_compare_func($key1, $key2) {\n        return strcasecmp($key1, $key2);\n    }\n    public function class_compare_func($key1, $key2) {\n        return strcasecmp($key1, $key2);\n    }\n}\necho \"\\n-- Testing array_intersect_ukey() function using class with static method as callback --\\n\";\nvar_dump( array_intersect_ukey($array1, $array2, array('MyClass','static_compare_func')) );\nvar_dump( array_intersect_ukey($array1, $array2, 'MyClass::static_compare_func') );\necho \"\\n-- Testing array_intersect_uassoc() function using class with regular method as callback --\\n\";\n$obj = new MyClass();\nvar_dump( array_intersect_ukey($array1, $array2, array($obj,'class_compare_func')) );\n?>")).toMatchSnapshot();
  });
});
