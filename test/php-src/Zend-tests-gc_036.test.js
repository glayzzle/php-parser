// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_036.phpt
  it("GC 036: Memleaks in self-referenced array", function () {
    expect(parser.parseCode("<?php\nfunction &foo() {\n    $a = [];\n    $a[] =& $a;\n    return $a;\n}\nfunction bar() {\n    gc_collect_cycles();\n}\nbar(foo());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
