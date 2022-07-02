// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug_debug_backtrace_replace_zend_execute_ex.phpt
  it("bug_debug_backtrace.phpt with replaced zend_execute_ex", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    bar();\n}\nfunction bar() {\n    boo();\n}\nfunction boo(){\n    debug_print_backtrace();\n}\neval(\"foo();\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
