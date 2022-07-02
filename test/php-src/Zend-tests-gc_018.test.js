// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_018.phpt
  it("GC 018: GC detach with assign", function () {
    expect(parser.parseCode("<?php\n$a = array(array());\n$a[0][0] =& $a[0];\n$a = 1;\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
