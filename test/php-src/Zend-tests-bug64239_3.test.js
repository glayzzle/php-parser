// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64239_3.phpt
  it("Bug #64239 (debug_print_backtrace() changed behavior)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    use T2 { t2method as Bmethod; }\n}\nclass C extends A {\n    public function Bmethod() {\n        debug_print_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 1);\n    }\n}\ntrait T2 {\n    public function t2method() {\n        debug_print_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 1);\n    }\n}\n$a = new A();\n$a->Bmethod();\n$a->t2method();\n$c = new C();\n$c->Bmethod();\n$c->t2method();\n?>")).toMatchSnapshot();
  });
});
