// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29689.phpt
  it("Bug #29689 (default value of protected member overrides default value of private)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    private $foo = 'foo';\n    private $foo2 = 'foo2';\n    function printFoo()\n    {\n        echo __CLASS__, ': ', $this->foo, \" \", $this->foo2, \"\\n\";\n    }\n}\nclass bar extends foo {\n    protected $foo = 'bar';\n    function printFoo()\n    {\n        parent::printFoo();\n        echo __CLASS__, ': ', $this->foo, \" \", $this->foo2, \"\\n\";\n    }\n}\nclass baz extends bar {\n    protected $foo = 'baz';\n    protected $foo2 = 'baz2';\n}\nclass bar2 extends foo {\n    function printFoo()\n    {\n        parent::printFoo();\n        echo __CLASS__, ': ', $this->foo, \" \", $this->foo2, \"\\n\";\n    }\n}\nclass baz2 extends bar2 {\n    protected $foo = 'baz2';\n    protected $foo2 = 'baz22';\n}\n$bar = new bar;\n$bar->printFoo();\necho \"---baz--\\n\";\n$baz = new baz();\n$baz->printFoo();\necho \"---baz2--\\n\";\n$baz = new baz2();\n$baz->printFoo();\n?>")).toMatchSnapshot();
  });
});
