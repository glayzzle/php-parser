// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_callbacks.phpt
  it("Test ob_start() with callbacks in variables", function () {
    expect(parser.parseCode("<?php\n// Closure in variable\n$a = function ($s) { return strtoupper($s); };\nob_start($a);\necho 'closure in variable', \"\\n\";\nob_end_flush();\n// Object (array) in variable\nclass foo {\n    static function out($foo) {\n        return strtoupper($foo);\n    }\n}\n$a = array('foo', 'out');\nob_start($a);\necho 'object in variable', \"\\n\";\nob_end_flush();\n// Object with static array\nob_start(array('foo', 'out'));\necho 'object via static array', \"\\n\";\nob_end_flush();\nfunction my_strtoupper($foo, $bar) {\n    return strtoupper($foo);\n}\n$a = 'my_strtoupper';\nob_start($a);\necho 'function via variable', \"\\n\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
