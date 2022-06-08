// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/gc-cycle-result.phpt
  it("GC can cleanup cycle when fiber result references fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = null;\n$fiber = new Fiber(function () use (&$fiber) {\n    return new class($fiber) {\n        private $fiber;\n        \n        public function __construct($fiber) {\n            $this->fiber = $fiber;\n        }\n        \n        public function __destruct() {\n            var_dump('DTOR');\n        }\n    };\n});\n$fiber->start();\nvar_dump('COLLECT CYCLES');\ngc_collect_cycles();\nvar_dump('DONE');\nvar_dump($fiber->isTerminated());\nunset($fiber);\nvar_dump('COLLECT CYCLES');\ngc_collect_cycles();\nvar_dump('DONE');\n?>")).toMatchSnapshot();
  });
});
