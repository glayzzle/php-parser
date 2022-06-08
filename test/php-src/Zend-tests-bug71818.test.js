// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71818.phpt
  it("Bug #71818 (Memory leak when array altered in destructor)", function () {
    expect(parser.parseCode("<?php\nclass MemoryLeak\n{\n    public function __construct()\n    {\n        $this->things[] = $this;\n    }\n    public function __destruct()\n    {\n        $this->things[] = null;\n    }\n    private $things = [];\n}\nini_set('memory_limit', '20M');\nfor ($i = 0; $i < 100000; ++$i) {\n    $obj = new MemoryLeak();\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
