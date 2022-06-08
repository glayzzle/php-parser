// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70730.phpt
  it("Bug #70730 (Incorrect ArrayObject serialization if unset is called in serialize())", function () {
    expect(parser.parseCode("<?php\nclass A extends \\ArrayObject\n{\n    protected $foo;\n    public function __construct()\n    {\n        $this->foo = 'bar';\n    }\n    public function serialize(): string\n    {\n        unset($this->foo);\n        $result = parent::serialize();\n        $this->foo = 'bar';\n        return $result;\n    }\n}\n$a = new A();\n$a->append('item1');\n$a->append('item2');\n$a->append('item3');\n$b = new A();\n$b->unserialize($a->serialize());\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
