// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_shuffle_basic.phpt
  it("Test str_shuffle() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing str_shuffle() : basic functionality\n*/\necho \"*** Testing str_shuffle() : basic functionality ***\\n\";\n// Initialize all required variables\n$str = 'This testcase tests the str_shuffle() function.';\nvar_dump(str_shuffle($str));\n// For a given i/p string ensure that all combinations are\n// generated given a reasonable sample of calls\n$a = array();\n$trys = 1000;\n$ip = 'abcd';\n$len_ip = strlen($ip);\nfor ($i = 0; $i < $trys; $i++) {\n    $op = str_shuffle($ip);\n    if (!is_string($op) || strlen($op) != $len_ip) {\n        echo \"TEST FAILED\\n\";\n    }\n    // Combination already hit ?\n    if (empty($a[$op])) {\n        // No first time init\n        $a[$op] = 0;\n    }\n    // Increment count for this combination\n    $a[$op]++;\n}\n$combinations = count($a);\nif ($combinations != 24) {\n    echo \"TEST FAILED.. Only $combinations out of a possible 24 combinations used\\n\";\n} else {\n    echo \"TEST PASSED\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
