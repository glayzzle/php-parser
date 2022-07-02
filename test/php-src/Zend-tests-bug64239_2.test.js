// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64239_2.phpt
  it("Bug #64239 (debug_backtrace() changed behavior)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    use T1;\n    public function test() { $this->backtrace(); }\n}\nclass B {\n    use T2 { t2method as Bmethod; }\n}\nclass C extends A {\n}\ntrait T1 {\n    protected function backtrace() {\n        $b = new B();\n        $b->Bmethod();\n    }\n}\ntrait T2 {\n    public function t2method() {\n        print_r(debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 1));\n    }\n}\n$a = new A();\n$a->test();\n$c = new C();\n$c->test();\n?>")).toMatchSnapshot();
  });
});
