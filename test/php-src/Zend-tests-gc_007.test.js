// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_007.phpt
  it("GC 007: Unreferenced array cycle", function () {
    expect(parser.parseCode("<?php\n$a = array(array());\n$a[0][0] =& $a[0];\nvar_dump($a[0]);\nvar_dump(gc_collect_cycles());\nunset($a);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
