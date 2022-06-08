// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug72306.phpt
  it("Bug #72306 (Heap overflow through proc_open and $env parameter)", function () {
    expect(parser.parseCode("<?php\nclass moo {\n    function __construct() { $this->a = 0; }\n    function __toString() { return $this->a++ ? str_repeat(\"a\", 0x8000) : \"a\"; }\n}\n$env = array('some_option' => new moo());\n$pipes = array();\n$description = array(\n   0 => array(\"pipe\", \"r\"),\n   1 => array(\"pipe\", \"w\"),\n   2 => array(\"pipe\", \"r\")\n);\n$process = proc_open('nothing', $description, $pipes, NULL, $env);\n?>\nokey")).toMatchSnapshot();
  });
});
