// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug70249.phpt
  it("Bug #70249 (Segmentation fault while running PHPUnit tests on phpBB 3.2-dev)", function () {
    expect(parser.parseCode("<?php\nclass Logger {\n    public function __construct() {\n        register_shutdown_function(function () {\n            // make regular flush before other shutdown functions, which allows session data collection and so on\n            $this->flush();\n            // make sure log entries written by shutdown functions are also flushed\n            // ensure \"flush()\" is called last when there are multiple shutdown functions\n            register_shutdown_function([$this, 'flush'], true);\n        });\n    }\n    public function flush($final = false) {\n        return 1;\n    }\n}\nfor ($i = 0; $i < 200; $i++) {\n    $a = new Logger();\n}\n?>\nokey")).toMatchSnapshot();
  });
});
