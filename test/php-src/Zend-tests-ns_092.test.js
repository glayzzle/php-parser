// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_092.phpt
  it("Typed group use statements", function () {
    expect(parser.parseCode("<?php\nnamespace Foo\\Bar {\n    class A { function __construct() {echo __METHOD__,\"\\n\";} }\n    class B { function __construct() {echo __METHOD__,\"\\n\";} }\n    function fiz(){ echo __FUNCTION__,\"\\n\"; }\n    function biz(){ echo __FUNCTION__,\"\\n\"; }\n    function buz(){ echo __FUNCTION__,\"\\n\"; }\n    const FOO = 1;\n    const BAR = 2;\n}\nnamespace Fiz\\Biz\\Buz {\n    use function Foo\\Bar\\{\n        fiz,\n        biz,\n        buz as boz,\n        A // <- this one must fail\n    };\n    use const Foo\\Bar\\{\n        FOO as FOZ,\n        BAR,\n        B // <- this one must fail\n    };\n    use Foo\\Bar\\{ A, B, const BAR as BOZ };\n    function buz(){ echo __FUNCTION__,\"\\n\"; }\n    const FOO = 100;\n    echo \"==== MIXED ====\\n\";\n    new A();\n    new B();\n    var_dump(BOZ);\n    echo \"===== CONSTANTS ====\\n\";\n    var_dump(FOO);\n    var_dump(FOZ);\n    var_dump(BAR);\n    var_dump(defined('B'));\n    echo \"===== FUNCTIONS ====\\n\";\n    buz();\n    fiz();\n    biz();\n    boz();\n    A();\n}\n?>")).toMatchSnapshot();
  });
});
