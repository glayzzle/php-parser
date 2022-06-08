// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/no-switch-gc.phpt
  it("Context switches are prevented during GC collect cycles", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function () {\n    call_user_func(function () {\n        $a = new class () {};\n        $b = new class () {\n            public function __destruct() {\n                Fiber::suspend();\n            }\n        };\n        $a->next = $b;\n        $b->next = $a;\n    });\n    gc_collect_cycles();\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
