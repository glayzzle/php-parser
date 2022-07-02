// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_arrays_002.phpt
  it("serialization: arrays with references amongst elements", function () {
    expect(parser.parseCode("<?php\nfunction check(&$a) {\n    var_dump($a);\n    $ser = serialize($a);\n    var_dump($ser);\n    $b = unserialize($ser);\n    var_dump($b);\n    $b[0] = \"b0.changed\";\n    var_dump($b);\n    $b[1] = \"b1.changed\";\n    var_dump($b);\n    $b[2] = \"b2.changed\";\n    var_dump($b);\n}\necho \"\\n\\n--- No references:\\n\";\n$a = array();\n$a[0] = 1;\n$a[1] = 1;\n$a[2] = 1;\ncheck($a);\necho \"\\n\\n--- 0 refs 1:\\n\";\n$a = array();\n$a[1] = 1;\n$a[0] = &$a[1];\n$a[2] = 1;\ncheck($a);\necho \"\\n\\n--- 0 refs 2:\\n\";\n$a = array();\n$a[2] = 1;\n$a[0] = &$a[2];\n$a[1] = 1;\ncheck($a);\necho \"\\n\\n--- 1 refs 0:\\n\";\n$a = array();\n$a[0] = 1;\n$a[1] = &$a[0];\n$a[2] = 1;\ncheck($a);\necho \"\\n\\n--- 1 refs 2:\\n\";\n$a = array();\n$a[0] = 1;\n$a[2] = 1;\n$a[1] = &$a[2];\ncheck($a);\necho \"\\n\\n--- 2 refs 0:\\n\";\n$a = array();\n$a[0] = 1;\n$a[1] = 1;\n$a[2] = &$a[0];\ncheck($a);\necho \"\\n\\n--- 2 refs 1:\\n\";\n$a = array();\n$a[0] = 1;\n$a[1] = 1;\n$a[2] = &$a[1];\ncheck($a);\necho \"\\n\\n--- 0,1 ref 2:\\n\";\n$a = array();\n$a[2] = 1;\n$a[0] = &$a[2];\n$a[1] = &$a[2];\ncheck($a);\necho \"\\n\\n--- 0,2 ref 1:\\n\";\n$a = array();\n$a[1] = 1;\n$a[0] = &$a[1];\n$a[2] = &$a[1];\ncheck($a);\necho \"\\n\\n--- 1,2 ref 0:\\n\";\n$a = array();\n$a[0] = 1;\n$a[1] = &$a[0];\n$a[2] = &$a[0];\ncheck($a);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
