// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/type_hinting_001.phpt
  it("ZE2 class type hinting", function () {
    expect(parser.parseCode("<?php\ninterface Foo {\n    function a(Foo $foo);\n}\ninterface Bar {\n    function b(Bar $bar);\n}\nclass FooBar implements Foo, Bar {\n    function a(Foo $foo) {\n        // ...\n    }\n    function b(Bar $bar) {\n        // ...\n    }\n}\nclass Blort {\n}\n$a = new FooBar;\n$b = new Blort;\n$a->a($b);\n$a->b($b);\n?>")).toMatchSnapshot();
  });
});
