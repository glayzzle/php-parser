// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities19.phpt
  it("htmlentities() / htmlspecialchars() ENT_SUBSTITUTE", function () {
    expect(parser.parseCode("<?php\n$tests = array(\n    \"\\x41\\xC2\\x3E\\x42\", // Unicode TR #36, 3.1.1; do not consume valid successor bytes\n    \"\\xE3\\x80\\x22\",    // Unicode TR #36, 3.6.1; use strategy #2\n    \"\\x41\\x98\\xBA\\x42\\xE2\\x98\\x43\\xE2\\x98\\xBA\\xE2\\x98\", // example from HTML5, section 2.4\n);\nforeach ($tests as $test) {\n    $a = htmlentities($test, ENT_QUOTES | ENT_SUBSTITUTE, \"UTF-8\");\n    var_dump($a, bin2hex($a));\n    $a = htmlspecialchars($test, ENT_QUOTES | ENT_SUBSTITUTE, \"UTF-8\");\n    var_dump($a, bin2hex($a));\n}\n?>")).toMatchSnapshot();
  });
});
