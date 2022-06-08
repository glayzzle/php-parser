// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/explode_variation6.phpt
  it("Test explode() function : usage variations - misc tests", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing explode() function: misc tests ***\\n\";\n$str = \"one\\x00two\\x00three\\x00four\";\necho \"\\n-- positive limit with null separator --\\n\";\n$e = test_explode(\"\\x00\", $str, 2);\necho \"\\n-- negative limit (since PHP 5.1) with null separator --\\n\";\n$e = test_explode(\"\\x00\", $str, -2);\necho \"\\n-- unknown string --\\n\";\n$e = test_explode(\"fred\", $str,1);\necho \"\\n-- limit = 0 --\\n\";\n$e = test_explode(\"\\x00\", $str, 0);\necho \"\\n-- limit = -1 --\\n\";\n$e = test_explode(\"\\x00\", $str, -1);\necho \"\\n-- large limit = -100 --\\n\";\n$e = test_explode(\"\\x00\", $str, 100);\nfunction test_explode($delim, $string, $limit)\n{\n    $e = explode($delim, $string, $limit);\n    foreach ( $e as $v)\n    {\n        var_dump(bin2hex($v));\n    }\n}\n?>")).toMatchSnapshot();
  });
});
