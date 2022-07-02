// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_041.phpt
  it("GC 041: Handling of references in nested data of objects with destructor", function () {
    expect(parser.parseCode("<?php\nclass ryat {\n        var $ryat;\n        var $chtg;\n        var $nested;\n        function __destruct() {\n                $GLOBALS['x'] = $this;\n        }\n}\n$o = new ryat;\n$o->nested = [];\n$o->nested[] =& $o->nested;\n$o->ryat = $o;\n$x =& $o->chtg;\nunset($o);\nvar_dump(gc_collect_cycles());\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
