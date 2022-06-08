// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_005.phpt
  it("GC 005: Simple object cycle", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass();\n$a->a = $a;\nvar_dump($a);\nunset($a);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
