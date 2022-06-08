// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_error.phpt
  it("Test session_set_save_handler() function : error functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : error functionality ***\\n\";\n// Get an unset variable\n$unset_var = 10;\nunset($unset_var);\nclass classA\n{\n    public function __toString() {\n        return \"Hello World!\";\n    }\n}\n$heredoc = <<<EOT\nHello World!\nEOT;\n$fp = fopen(__FILE__, \"r\");\n// Unexpected values to be passed as arguments\n$inputs = array(\n       // Integer data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       // Float data\n/*5*/  10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5,\n       // Null data\n/*10*/ NULL,\n       null,\n       // Boolean data\n/*12*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // Empty strings\n/*16*/ \"\",\n       '',\n       // Invalid string data\n/*18*/ \"Nothing\",\n       'Nothing',\n       $heredoc,\n       // Object data\n/*21*/ new classA(),\n       // Undefined data\n/*22*/ @$undefined_var,\n       // Unset data\n/*23*/ @$unset_var,\n       // Resource variable\n/*24*/ $fp\n);\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    try {\n        session_set_save_handler($input, NULL, NULL, NULL, NULL, NULL);\n    } catch (TypeError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    $iterator++;\n}\nfclose($fp);\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
