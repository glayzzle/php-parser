// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_006.phpt
  it("GC 006: Simple array-object cycle", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass();\n$a->a = array();\n$a->a[0] =& $a;\nvar_dump($a);\nunset($a);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
