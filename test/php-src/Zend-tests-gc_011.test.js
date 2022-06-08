// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_011.phpt
  it("GC 011: GC and destructors", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $a;\n    function __destruct() {\n        echo __FUNCTION__,\"\\n\";\n    }\n}\n$a = new Foo();\n$a->a = $a;\nvar_dump($a);\nunset($a);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
