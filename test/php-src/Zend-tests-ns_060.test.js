// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_060.phpt
  it("060: multiple namespaces per file", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nuse Bar\\A as B;\nclass A {}\n$a = new B;\n$b = new A;\necho get_class($a).\"\\n\";\necho get_class($b).\"\\n\";\nnamespace Bar;\nuse Foo\\A as B;\n$a = new B;\n$b = new A;\necho get_class($a).\"\\n\";\necho get_class($b).\"\\n\";\nclass A {}\n?>")).toMatchSnapshot();
  });
});
