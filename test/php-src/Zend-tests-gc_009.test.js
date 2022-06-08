// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_009.phpt
  it("GC 009: Unreferenced array-object cycle", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$a[0] = new stdClass();\n$a[0]->a = array();\n$a[0]->a[0] =& $a[0];\nvar_dump($a[0]);\nvar_dump(gc_collect_cycles());\nunset($a);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
