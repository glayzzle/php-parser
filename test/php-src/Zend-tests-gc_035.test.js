// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_035.phpt
  it("GC 035: Lost inner-cycles garbage", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $a;\n    public $x;\n    function __destruct() {\n        unset($this->x);\n    }\n}\n$a = new A;\n$a->a = $a;\n$a->x = [];\n$a->x[] =& $a->x;\n$a->x[] = $a;\nvar_dump(gc_collect_cycles());\nunset($a);\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
