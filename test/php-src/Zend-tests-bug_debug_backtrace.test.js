// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug_debug_backtrace.phpt
  it("Bug - crash in debug_backtrace when trace starts in eval", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    bar();\n}\nfunction bar() {\n    boo();\n}\nfunction boo(){\n    debug_print_backtrace();\n}\neval(\"foo();\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
