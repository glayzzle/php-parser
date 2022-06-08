// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_030.phpt
  it("GC 030: GC and exceptions in destructors", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public $foo;\n    public function __destruct() {\n        throw new Exception(\"foobar\");\n    }\n}\n$f1 = new foo;\n$f2 = new foo;\n$f1->foo = $f2;\n$f2->foo = $f1;\nunset($f1, $f2);\ngc_collect_cycles();\n?>")).toMatchSnapshot();
  });
});
