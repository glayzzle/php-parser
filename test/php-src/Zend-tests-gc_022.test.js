// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_022.phpt
  it("GC 022: GC detach reference in executor's PZVAL_UNLOCK()", function () {
    expect(parser.parseCode("<?php\n$a = array(array());\n$a[0][0] =& $a[0];\n$s = array(1) + unserialize(serialize($a[0]));\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
