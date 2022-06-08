// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakmap_iteration.phpt
  it("WeakMap iteration", function () {
    expect(parser.parseCode("<?php\n$map = new WeakMap;\necho \"\\nEmpty loop:\\n\";\nforeach ($map as $key => $value) {\n    var_dump($key, $value);\n}\necho \"\\nSimple loop:\\n\";\n$obj0 = new stdClass;\n$obj1 = new stdClass;\n$obj2 = new stdClass;\n$map[$obj0] = 0;\n$map[$obj1] = 1;\n$map[$obj2] = 2;\nforeach ($map as $key => $value) {\n    var_dump($key, $value);\n}\necho \"\\nObject removed during loop:\\n\";\nforeach ($map as $key => $value) {\n    if (isset($obj1) && $key === $obj1) unset($obj1);\n    var_dump($key, $value);\n}\necho \"\\nBy reference iteration:\\n\";\nforeach ($map as $key => &$value) {\n    $value++;\n}\nvar_dump($map);\n?>")).toMatchSnapshot();
  });
});
