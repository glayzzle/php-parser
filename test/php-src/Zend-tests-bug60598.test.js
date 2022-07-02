// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60598.phpt
  it("Bug #60598 (cli/apache sapi segfault on objects manipulation)", function () {
    expect(parser.parseCode("<?php\ndefine('OBJECT_COUNT', 10000);\n$containers = array();\nclass ObjectOne {\n    protected $_guid = 0;\n    public function __construct() {\n        global $containers;\n        $this->guid = 1;\n        $containers[spl_object_hash($this)] = $this;\n    }\n    public function __destruct() {\n        global $containers;\n        $containers[spl_object_hash($this)] = NULL;\n    }\n}\nfor ($i = 0; $i < OBJECT_COUNT; ++$i) {\n    new ObjectOne();\n}\n// You probably won't see this because of the \"zend_mm_heap corrupted\"\n?>\nIf you see this, try to increase OBJECT_COUNT to 100,000")).toMatchSnapshot();
  });
});
