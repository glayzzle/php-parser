// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69446.phpt
  it("Bug #69446 (GC leak relating to removal of nested data after dtors run)", function () {
    expect(parser.parseCode("<?php\n$bar = NULL;\nclass bad {\n    public function __destruct() {\n        global $bar;\n        $bar = $this;\n        $bar->y = new stdClass;\n    }\n}\n$foo = new stdClass;\n$foo->foo = $foo;\n$foo->bad = new bad;\n$foo->bad->x = new stdClass;\nunset($foo);\ngc_collect_cycles();\nvar_dump($bar);\n?>")).toMatchSnapshot();
  });
});
