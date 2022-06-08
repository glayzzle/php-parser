// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72177.phpt
  it("Bug #72177 Scope issue in __destruct after ReflectionProperty::setValue()", function () {
    expect(parser.parseCode("<?php\nclass Child\n{\n    protected $bar;\n    public function __destruct()\n    {\n        $this->bar = null;\n    }\n}\nclass Parnt\n{\n    protected $child;\n    public function doSomething()\n    {\n        $this->child = new Child();\n        $prop = new \\ReflectionProperty($this, 'child');\n        $prop->setValue($this, null);\n    }\n}\n$p = new Parnt();\n$p->doSomething();\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
