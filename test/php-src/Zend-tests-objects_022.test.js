// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_022.phpt
  it("Testing 'self', 'parent' as type-hint", function () {
    expect(parser.parseCode("<?php\ninterface iTest { }\nclass baz implements iTest {}\nclass bar { }\nclass foo extends bar {\n    public function testFoo(self $obj) {\n        var_dump($obj);\n    }\n    public function testBar(parent $obj) {\n        var_dump($obj);\n    }\n    public function testBaz(iTest $obj) {\n        var_dump($obj);\n    }\n}\n$foo = new foo;\n$foo->testFoo(new foo);\n$foo->testBar(new bar);\n$foo->testBaz(new baz);\n$foo->testFoo(new stdClass); // Recoverable fatal error\n?>")).toMatchSnapshot();
  });
});
