// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_055.phpt
  it("055: types in namespaces", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nclass Foo {\n    function test1(Foo $x) {\n        echo \"ok\\n\";\n    }\n    function test2(\\test\\ns1\\Foo $x) {\n        echo \"ok\\n\";\n    }\n    function test3(\\Exception $x) {\n        echo \"ok\\n\";\n    }\n}\n$foo = new Foo();\n$ex = new \\Exception();\n$foo->test1($foo);\n$foo->test2($foo);\n$foo->test3($ex);\n?>")).toMatchSnapshot();
  });
});
