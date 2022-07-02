// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert.phpt
  it("assert()", function () {
    expect(parser.parseCode("<?php\nfunction a($file, $line, $unused, $desc)\n{\n    echo \"assertion failed $line,\\\"$desc\\\"\\n\";\n}\nclass a\n{\n    static function assert($file, $line, $unused, $desc)\n    {\n        echo \"class assertion failed $line,\\\"$desc\\\"\\n\";\n    }\n}\nassert_options(ASSERT_ACTIVE,1);\nassert_options(ASSERT_WARNING,0);\n$a = 0;\nassert_options(ASSERT_CALLBACK,\"a\");\nassert($a != 0);\nassert_options(ASSERT_CALLBACK,array(\"a\",\"assert\"));\nassert($a != 0);\n$obj = new a();\nassert_options(ASSERT_CALLBACK,array(&$obj,\"assert\"));\nassert($a != 0);\n?>")).toMatchSnapshot();
  });
});
