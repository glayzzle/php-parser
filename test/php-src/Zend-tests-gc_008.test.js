// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_008.phpt
  it("GC 008: Unreferenced object cycle", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass();\n$a->a = new stdClass();\n$a->a->a = $a->a;\nvar_dump($a->a);\nvar_dump(gc_collect_cycles());\nunset($a);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
