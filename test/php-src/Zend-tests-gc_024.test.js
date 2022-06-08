// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_024.phpt
  it("GC 024: GC and objects with non-standard handlers", function () {
    expect(parser.parseCode("<?php\n$a = new ArrayObject();\n$a[0] = $a;\nunset($a);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
