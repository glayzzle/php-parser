// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_arrays_005.phpt
  it("serialization: arrays with references, nested", function () {
    expect(parser.parseCode("<?php\nfunction check(&$a) {\n    var_dump($a);\n    $ser = serialize($a);\n    var_dump($ser);\n    $b = unserialize($ser);\n    // Change each element and dump result.\n    foreach($b as $k=>$v) {\n        if (is_array($v)){\n            foreach($b[$k] as $sk=>$sv) {\n                $b[$k][$sk] = \"b$k.$sk.changed\";\n                var_dump($b);\n            }\n        } else {\n            $b[$k] = \"b$k.changed\";\n            var_dump($b);\n        }\n    }\n}\necho \"\\n\\n--- Nested array references 1 element in containing array:\\n\";\n$a = array();\n$c = array(1,1,&$a);\n$a[0] = &$c[0];\n$a[1] = 1;\ncheck($c);\necho \"\\n\\n--- Nested array references 1 element in containing array (slightly different):\\n\";\n$a = array();\n$c = array(1,&$a,1);\n$a[0] = 1;\n$a[1] = &$c[0];\ncheck($c);\necho \"\\n\\n--- Nested array references 2 elements in containing array:\\n\";\n$a = array();\n$c = array(1,1,&$a);\n$a[0] = &$c[0];\n$a[1] = &$c[1];\ncheck($c);\necho \"\\n\\n--- Containing array references 1 element in nested array:\\n\";\n$a = array();\n$a[0] = 1;\n$a[1] = 1;\n$c = array(1,&$a[0],&$a);\ncheck($c);\necho \"\\n\\n--- Containing array references 2 elements in nested array:\\n\";\n$a = array();\n$a[0] = 1;\n$a[1] = 1;\n$c = array(&$a[0],&$a[1],&$a);\ncheck($c);\necho \"\\n\\n--- Nested array references container:\\n\";\n$a = array();\n$c = array(1,1,&$a);\n$a[0] = 1;\n$a[1] = &$c;\ncheck($c);\n?>")).toMatchSnapshot();
  });
});
