// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64896.phpt
  it("Bug #64896 (Segfault with gc_collect_cycles using unserialize on certain objects)", function () {
    expect(parser.parseCode("<?php\n$bar = NULL;\nclass bad\n{\n    private $_private = array();\n    public function __construct()\n    {\n        $this->_private[] = 'php';\n    }\n    public function __destruct()\n    {\n        global $bar;\n        $bar = $this;\n    }\n}\n$foo = new stdclass;\n$foo->foo = $foo;\n$foo->bad = new bad;\ngc_disable();\nunserialize(serialize($foo));\ngc_collect_cycles();\nvar_dump($bar);\ngc_enable();\n/*  will output:\nobject(bad)#4 (1) {\n  [\"_private\":\"bad\":private]=>\n  &UNKNOWN:0\n}\n*/\n?>")).toMatchSnapshot();
  });
});
