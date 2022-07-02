// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_020.phpt
  it("GC 020: GC detach reference with assign", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$a[0] =& $a;\n$a[1] = array();\n$a[1][0] =& $a[1];\n$a = 1;\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
