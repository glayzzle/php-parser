// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_023.phpt
  it("GC 023: Root buffer overflow (automatic collection)", function () {
    expect(parser.parseCode("<?php\n$a=array();\nfor ($i=0; $i < 9999; $i++) {\n    $a[$i] = array(array());\n    $a[$i][0] = & $a[$i];\n}\nvar_dump(gc_collect_cycles());\nunset($a);\nvar_dump(gc_collect_cycles());\n$a=array();\nfor ($i=0; $i < 10001; $i++) {\n    $a[$i] = array(array());\n    $a[$i][0] = & $a[$i];\n}\nvar_dump(gc_collect_cycles());\nunset($a); // 10000 zvals collected automatic\nvar_dump(gc_collect_cycles());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
