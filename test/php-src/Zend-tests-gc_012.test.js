// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_012.phpt
  it("GC 012: collection of many loops at once", function () {
    expect(parser.parseCode("<?php\n$a=array();\nfor ($i=0; $i < 1000; $i++) {\n    $a[$i] = array(array());\n    $a[$i][0] = & $a[$i];\n}\nvar_dump(gc_collect_cycles());\nunset($a);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
