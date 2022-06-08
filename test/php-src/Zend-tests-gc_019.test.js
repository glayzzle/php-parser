// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_019.phpt
  it("GC 019: GC detach with assign by reference", function () {
    expect(parser.parseCode("<?php\n$a = array(array());\n$a[0][0] =& $a[0];\n$b = 1;\n$a =& $b;\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
