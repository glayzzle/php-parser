// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert03.phpt
  it("assert() - set callback using ini_set()", function () {
    expect(parser.parseCode("<?php\nfunction a($file, $line, $unused, $desc)\n{\n            echo \"assertion failed - a - $line,\\\"$desc\\\"\\n\";\n}\nfunction b($file, $line, $unused, $desc)\n{\n            echo \"assertion failed - b - $line,\\\"$desc\\\"\\n\";\n}\nassert_options(ASSERT_ACTIVE,1);\nassert_options(ASSERT_WARNING,0);\n$a = 0;\nassert_options(ASSERT_CALLBACK, \"a\");\nassert($a != 0);\n /* Modify call back using ini_set() */\nini_set(\"assert.callback\", \"b\");\nassert($a != 0);\n?>")).toMatchSnapshot();
  });
});
