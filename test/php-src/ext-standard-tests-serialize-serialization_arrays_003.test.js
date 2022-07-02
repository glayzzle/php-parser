// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_arrays_003.phpt
  it("serialization: arrays with references to an external variable", function () {
    expect(parser.parseCode("<?php\nfunction check(&$a) {\n    var_dump($a);\n    $ser = serialize($a);\n    var_dump($ser);\n    $b = unserialize($ser);\n    var_dump($b);\n    $b[0] = \"b0.changed\";\n    var_dump($b);\n    $b[1] = \"b1.changed\";\n    var_dump($b);\n    $b[2] = \"b2.changed\";\n    var_dump($b);\n}\necho \"\\n\\n--- 0 refs external:\\n\";\n$ext = 1;\n$a = array();\n$a[0] = &$ext;\n$a[1] = 1;\n$a[2] = 1;\ncheck($a);\necho \"\\n\\n--- 1 refs external:\\n\";\n$ext = 1;\n$a = array();\n$a[0] = 1;\n$a[1] = &$ext;\n$a[2] = 1;\ncheck($a);\necho \"\\n\\n--- 2 refs external:\\n\";\n$ext = 1;\n$a = array();\n$a[0] = 1;\n$a[1] = 1;\n$a[2] = &$ext;\ncheck($a);\necho \"\\n\\n--- 1,2 ref external:\\n\";\n$ext = 1;\n$a = array();\n$a[0] = &$ext;\n$a[1] = &$ext;\n$a[2] = 1;\ncheck($a);\necho \"\\n\\n--- 1,2,3 ref external:\\n\";\n$ext = 1;\n$a = array();\n$a[0] = &$ext;\n$a[1] = &$ext;\n$a[2] = &$ext;\ncheck($a);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
