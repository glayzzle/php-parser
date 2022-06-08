// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_arrays_004.phpt
  it("serialization: arrays with references to the containing array", function () {
    expect(parser.parseCode("<?php\nfunction check(&$a) {\n    var_dump($a);\n    $ser = serialize($a);\n    var_dump($ser);\n    $b = unserialize($ser);\n    var_dump($b);\n    $b[0] = \"b0.changed\";\n    var_dump($b);\n    $b[1] = \"b1.changed\";\n    var_dump($b);\n    $b[2] = \"b2.changed\";\n    var_dump($b);\n}\necho \"\\n\\n--- 1 refs container:\\n\";\n$a = array();\n$a[0] = &$a;\n$a[1] = 1;\n$a[2] = 1;\ncheck($a);\necho \"\\n\\n--- 1,2 ref container:\\n\";\n$a = array();\n$a[0] = &$a;\n$a[1] = &$a;\n$a[2] = 1;\ncheck($a);\necho \"\\n\\n--- 1,2,3 ref container:\\n\";\n$a = array();\n$a[0] = &$a;\n$a[1] = &$a;\n$a[2] = &$a;\ncheck($a);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
