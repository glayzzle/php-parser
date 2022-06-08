// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_032.phpt
  it("GC 032: Crash in GC because of invalid reference counting", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$b =& $a;\n$a[0] = $a;\nvar_dump($a);\n$a = array(array());\n$b =& $a;\n$a[0][0] = $a;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
