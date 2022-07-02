// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_015.phpt
  it("GC 015: Object as root of cycle", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass();\n$c =& $a;\n$b = $a;\n$a->a = $a;\n$a->b = \"xxx\";\nunset($c);\nunset($a);\nunset($b);\nvar_dump(gc_collect_cycles() > 0);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
