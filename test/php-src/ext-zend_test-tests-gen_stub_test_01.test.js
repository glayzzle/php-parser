// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/gen_stub_test_01.phpt
  it("gen_stub.php: nested namespaced typed properties test.", function () {
    expect(parser.parseCode("<?php\n$foo = new \\ZendTestNS2\\Foo();\nvar_dump($foo);\n$foo->foo = new \\ZendTestNS2\\ZendSubNS\\Foo();\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
