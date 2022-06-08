// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_021.phpt
  it("GC 021: GC detach reference with assign by reference", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$a[0] =& $a;\n$a[1] = array();\n$a[1][0] =& $a[1];\n$b = 1;\n$a =& $b;\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
