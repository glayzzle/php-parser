// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70805.phpt
  it("Bug #70805 (Segmentation faults whilst running Drupal 8 test suite)", function () {
    expect(parser.parseCode("<?php\nclass A {\n}\nclass B {\n}\nclass C {\n    public function __destruct() {\n        if (isset($GLOBALS[\"a\"])) {\n            unset($GLOBALS[\"array\"]);\n            unset($GLOBALS[\"a\"]); // this will be called in gc_colloct_roots and put $a into gc roots buf\n        }\n    }\n}\n$a = new A;\n$a->b = new B;\n$a->b->a = $a;\n$i = 0;\n$c = new A;\n$array = array($c); //This is used to leave a room for $GLOBALS[\"a\"]\nunset($c);\nwhile ($i++ < 9998) {\n    $t = [];\n    $t[] = &$t;\n    unset($t);\n}\n$t = [new C];\n$t[] = &$t;\nunset($t); // This is used to trigger C::__destruct while doing gc_colloct_roots\n$e = $a;\nunset($a); // This one can not be putted into roots buf because it's full, thus gc_colloct_roots will be called,\n           // but C::__destructor which is called in gc_colloct_roots will put $a into buf\n           // which will make $a be putted into gc roots buf twice\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
