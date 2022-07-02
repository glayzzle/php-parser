// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_033.phpt
  it("GC 033: Crash in GC while run with phpspec", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass();\n$a->a = array();\n$a->a[0] = new Stdclass();\n$a->a[0]->a = $a;\n$a->a[1] = &$a->a;\n/* remove the self-reference array out of roots */\ngc_collect_cycles();\n/* do unset */\nunset($a);\n/* let's full the gc roots */\nfor ($i=0; $i<9999; $i++) {\n        $b = range(0, 1);\n            $b[0] = &$b;\n            unset($b);\n}\n/* then $a will be freed, but $a->a[0] is not. reference to a freed $a */\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
