// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_037.phpt
  it("GC 037: gc_status()", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$a[] =& $a;\nunset($a);\nvar_dump(gc_status());\ngc_collect_cycles();\ngc_collect_cycles();\nvar_dump(gc_status());\n?>")).toMatchSnapshot();
  });
});
