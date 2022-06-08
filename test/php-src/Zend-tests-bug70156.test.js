// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70156.phpt
  it("Bug #70156 (Segfault in zend_find_alias_name)", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n    protected function foo1()\n    {\n        $this->bar();\n    }\n}\ntrait T2 {\n    protected function foo2()\n    {\n        debug_print_backtrace();\n    }\n}\nclass dummy {\n    use T1 {\n        foo1 as private;\n    }\n    use T2 {\n        foo2 as bar;\n    }\n    public function __construct()\n    {\n        $this->foo1();\n    }\n}\nnew dummy();\n?>")).toMatchSnapshot();
  });
});
