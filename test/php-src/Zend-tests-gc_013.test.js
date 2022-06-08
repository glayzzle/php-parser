// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_013.phpt
  it("GC 013: Too many cycles in one array", function () {
    expect(parser.parseCode("<?php\n$a = array();\nfor ($i = 0; $i < 10001; $i++) {\n    $a[$i] =& $a;\n}\n$a[] = \"xxx\";\nunset($a);\nvar_dump(gc_collect_cycles() > 0);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
