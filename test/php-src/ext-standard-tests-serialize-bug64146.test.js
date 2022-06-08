// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug64146.phpt
  it("Bug #64146 (serialize incorrectly saving objects when they are cloned)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public $a = array();\n    public function __construct()\n    {\n        $this->a[] = new B(1);\n        $this->a[] = new B(2);\n    }\n}\nclass B implements Serializable\n{\n    public $b;\n    public function __construct($c)\n    {\n        $this->b = new C($c);\n    }\n    public function serialize()\n    {\n        return serialize(clone $this->b);\n    }\n    public function unserialize($data)\n    {\n        $this->b = unserialize($data);\n    }\n}\nclass C\n{\n    public $c;\n    public function __construct($c)\n    {\n        $this->c = $c;\n    }\n}\n$a = unserialize(serialize(new A()));\nprint $a->a[0]->b->c . \"\\n\";\nprint $a->a[1]->b->c . \"\\n\";\n?>\nDone")).toMatchSnapshot();
  });
});
