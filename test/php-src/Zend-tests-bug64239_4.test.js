// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64239_4.phpt
  it("Bug #64239 (debug_print_backtrace() changed behavior)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    use T2 { t2method as Bmethod; }\n}\nclass C extends A {\n    public static function Bmethod() {\n        debug_print_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 1);\n    }\n}\ntrait T2 {\n    public static function t2method() {\n        debug_print_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 1);\n    }\n}\nA::Bmethod();\nA::t2method();\nC::Bmethod();\nC::t2method();\n?>")).toMatchSnapshot();
  });
});
