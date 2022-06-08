// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_004.phpt
  it("GC 004: Simple array cycle", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$a[] =& $a;\nvar_dump($a);\nunset($a);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
