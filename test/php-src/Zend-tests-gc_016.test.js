// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_016.phpt
  it("GC 016: nested GC calls", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $a;\n    function __destruct() {\n        echo \"-> \";\n        $a = array();\n        $a[] =& $a;\n        unset($a);\n        var_dump(gc_collect_cycles());\n    }\n}\n$a = new Foo();\n$a->a = $a;\nunset($a);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
