// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73989.phpt
  it("Bug #73989 (PHP 7.1 Segfaults within Symfony test suite)", function () {
    expect(parser.parseCode("<?php\nclass Cycle\n{\n    private $thing;\n    public function __construct()\n    {\n        $obj = $this;\n        $this->thing = function() use($obj) {};\n    }\n    public function __destruct()\n    {\n        ($this->thing)();\n    }\n}\nfor ($i = 0; $i < 10000; ++$i) {\n    $obj = new Cycle();\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
