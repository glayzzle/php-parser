// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_026.phpt
  it("GC 026: Automatic GC on request shutdown (GC enabled at run-time)", function () {
    expect(parser.parseCode("<?php\ngc_enable();\n$a = array(array());\n$a[0][0] =& $a[0];\nunset($a);\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
