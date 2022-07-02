// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_025.phpt
  it("GC 025: Automatic GC on request shutdown", function () {
    expect(parser.parseCode("<?php\n$a = array(array());\n$a[0][0] =& $a[0];\nunset($a);\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
