// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70805_1.phpt
  it("Bug #70805 (Segmentation faults whilst running Drupal 8 test suite) (Crash)", function () {
    expect(parser.parseCode("<?php\nclass A {\n}\nclass B {\n}\nclass C {\n    public function __destruct() {\n        if (isset($GLOBALS[\"a\"])) {\n            unset($GLOBALS[\"array\"]);\n            unset($GLOBALS[\"a\"]);\n        }\n    }\n}\n$a = new A;\n$a->b = new B;\n$a->b->a = $a;\n$i = 0;\n$c = new A;\n$array = array($c);\nunset($c);\nwhile ($i++ < 9998) {\n    $t = [];\n    $t[] = &$t;\n    unset($t);\n}\n$t = [new C];\n$t[] = &$t;\nunset($t);\nunset($a);\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
