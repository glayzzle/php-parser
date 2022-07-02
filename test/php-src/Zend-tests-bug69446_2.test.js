// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69446_2.phpt
  it("Bug #69446 (GC leak relating to removal of nested data after dtors run)", function () {
    expect(parser.parseCode("<?php\n$bar = NULL;\nclass bad\n{\n    public $_private = array();\n    public function __construct()\n    {\n        $this->_private[] = 'php';\n    }\n    public function __destruct()\n    {\n        global $bar;\n        $bar = $this;\n    }\n}\n$foo = new stdclass;\n$foo->foo = $foo;\n$foo->bad = new bad;\nunserialize(serialize($foo));\n//unset($foo);\ngc_collect_cycles();\nvar_dump($bar);\n?>")).toMatchSnapshot();
  });
});
