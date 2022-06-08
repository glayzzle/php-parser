// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/gc-cycle-callback.phpt
  it("GC can cleanup cycle when callback references fiber", function () {
    expect(parser.parseCode("<?php\n$ref = new class () {\n    public $fiber;\n    \n    public function __destruct() {\n        var_dump('DTOR');\n    }\n};\n$fiber = new Fiber(function () use ($ref) {\n    die('UNREACHABLE');\n});\n$ref->fiber = $fiber;\n$fiber = null;\n$ref = null;\nvar_dump('COLLECT CYCLES');\ngc_collect_cycles();\nvar_dump('DONE');\n?>")).toMatchSnapshot();
  });
});
