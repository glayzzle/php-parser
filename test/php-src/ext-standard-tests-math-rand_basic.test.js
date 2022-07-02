// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/rand_basic.phpt
  it("Test  rand() - basic function test rand()", function () {
    expect(parser.parseCode("<?php\n$default_max = getrandmax();\necho \"\\nrand() tests with default min and max value (i.e 0 thru \", $default_max, \")\\n\";\nfor ($i = 0; $i < 100; $i++) {\n    $res = rand();\n// By default RAND_MAX is 32768 although no constant is defined for it for user space apps\n    if ($res < 0 || $res > $default_max) {\n        break;\n    }\n}\nif ($i != 100) {\n    echo \"FAILED: res = \", $res, \" min = 0 max = \", $default_max, \"\\n\";\n} else {\n    echo \"PASSED: range min = 0 max = \", $default_max, \"\\n\";\n}\necho \"\\nrand() tests with defined min and max value\\n\";\n$min = array(10,\n             100,\n             10.5e3,\n             0x10,\n             0400);\n$max = array(100,\n             1000,\n             10.5e5,\n             0x10000,\n             0700);\nfor ($x = 0; $x < count($min); $x++) {\n    for ($i = 0; $i < 100; $i++) {\n        $res = rand($min[$x], $max[$x]);\n        if (!is_int($res) || $res < intval($min[$x]) || $res > intval($max[$x])) {\n            echo \"FAILED: res = \",  $res, \" min = \", intval($min[$x]), \" max = \", intval($max[$x]), \"\\n\";\n            break;\n        }\n    }\n    if ($i == 100) {\n        echo \"PASSED: range min = \", intval($min[$x]), \" max = \", intval($max[$x]), \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
