// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70805_2.phpt
  it("Bug #70805 (Segmentation faults whilst running Drupal 8 test suite) (Memleak)", function () {
    expect(parser.parseCode("<?php\nclass A {\n}\nclass B {\n}\nclass C {\n    public function __destruct() {\n        if (isset($GLOBALS[\"a\"])) {\n            unset($GLOBALS[\"a\"]);\n        }\n    }\n}\n$a = new A;\n$a->b = new B;\n$a->b->a = $a;\n$i = 0;\nwhile ($i++ < 9999) {\n    $t = [];\n    $t[] = &$t;\n    unset($t);\n}\n$t = [new C];\n$t[] = &$t;\nunset($t);\nunset($a);\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
