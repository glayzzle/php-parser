// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities23.phpt
  it("htmlentities() / htmlspecialchars() ENT_SUBSTITUTE EUC-JP", function () {
    expect(parser.parseCode("<?php\n$tests = array(\n    \"\\x8F\\xA1\\xFF\", //2 sub as 2nd is potentially valid as lead\n    \"\\x8F\\xA1\", //2 sub, as 2nd is potentially valid as lead\n    \"\\x8F\", //1 sub\n    \"\\x8F\\xA0\", //1 sub, A0 is not valid as sole/first byte\n    \"\\x8F\\xA1\\x21\", //2 sub, no consume last\n    \"\\x8F\\x21\", //1 sub, no consume last\n    \"\\x8E\\xAE\", //valid\n    \"\\x8E\", //1 sub\n    \"\\x8E\\x21\", //1 sub, no consume last\n    \"\\xB2\\xFF\", //1 sub\n    \"\\xB2\", //1 sub\n    \"\\xB2\\x21\", //1 sub, no consume last\n    \"\\xA0\", //1 sub\n);\nforeach ($tests as $test) {\n    $a = htmlentities($test, ENT_QUOTES | ENT_SUBSTITUTE, \"EUC-JP\");\n    var_dump($a, bin2hex($a));\n    $a = htmlspecialchars($test, ENT_QUOTES | ENT_SUBSTITUTE, \"EUC-JP\");\n    var_dump($a, bin2hex($a));\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
