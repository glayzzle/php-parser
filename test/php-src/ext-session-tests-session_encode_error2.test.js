// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_encode_error2.phpt
  it("Test session_encode() function : error functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_encode() : error functionality ***\\n\";\n// Unexpected values to be passed as arguments\n$inputs = array(\n       // Integer data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       // Empty strings\n       '',\n       // Invalid string data\n       'Nothing',\n);\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    var_dump(session_start());\n    try {\n        $_SESSION[$input] = \"Hello World!\";\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    var_dump(session_encode());\n    var_dump(session_destroy());\n    $iterator++;\n};\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
