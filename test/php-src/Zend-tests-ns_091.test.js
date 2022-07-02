// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_091.phpt
  it("Group use statements with compound namespaces", function () {
    expect(parser.parseCode("<?php\nnamespace Foo\\Bar {\n    class A { function __construct() {echo __METHOD__,\"\\n\";} }\n}\nnamespace Foo\\Bar\\Baz {\n    class B { function __construct() {echo __METHOD__,\"\\n\";} }\n}\nnamespace Fiz\\Biz\\Buz {\n    use Foo\\Bar\\{ A, Baz\\B };\n    new A;\n    new B;\n}\n?>")).toMatchSnapshot();
  });
});
