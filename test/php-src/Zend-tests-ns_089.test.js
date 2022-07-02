// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_089.phpt
  it("Group use statements", function () {
    expect(parser.parseCode("<?php\nnamespace Foo\\Bar\\Baz {\n    function foo(){echo __FUNCTION__,\"\\n\";}\n    function bar(){echo __FUNCTION__,\"\\n\";}\n    const FOO = 0;\n    const BAR = 1;\n    class A { function __construct() {echo __METHOD__,\"\\n\";} }\n    class B { function __construct() {echo __METHOD__,\"\\n\";} }\n    class C { function __construct() {echo __METHOD__,\"\\n\";} }\n    class D { function __construct() {echo __METHOD__,\"\\n\";} }\n}\nnamespace Fiz\\Biz\\Buz {\n    use Foo\\Bar\\Baz\\{\n        A,\n        B,\n        C as AC,\n        D,\n        // comment between declarations\n        function foo,\n        function bar as buz,\n        const FOO,\n        const BAR AS BOZ\n    };\n    class C { function __construct() {echo __METHOD__,\"\\n\";}}\n    function bar(){echo __FUNCTION__,\"\\n\";}\n    const BAR = 100;\n    new A;\n    new B;\n    new AC;\n    new D;\n    new C;\n    foo();\n    buz();\n    bar();\n    var_dump(FOO);\n    var_dump(BOZ);\n    var_dump(BAR);\n}\n?>")).toMatchSnapshot();
  });
});
