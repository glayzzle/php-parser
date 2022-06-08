// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_decode_error2.phpt
  it("Test session_decode() function : error functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_decode() : error functionality ***\\n\";\n$data = \"foo|a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}guff|R:1;blah|R:1;\";\nvar_dump(session_start());\nfor($index = 0; $index < strlen($data); $index++) {\n    if(session_status() != PHP_SESSION_ACTIVE) { session_start(); }\n    echo \"\\n-- Iteration $index --\\n\";\n    $encoded = substr($data, 0, $index);\n    var_dump(session_decode($encoded));\n    var_dump($_SESSION);\n};\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
