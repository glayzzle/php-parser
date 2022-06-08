// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug33389.phpt
  it("Reflection Bug #33389 (double free() when exporting a ReflectionClass)", function () {
    expect(parser.parseCode("<?php\ndefine ('foobar', 1);\nclass Test {\n    function foo1($arg=foobar) {\n    }\n    function foo2($arg=null) {\n    }\n    function foo3($arg=false) {\n    }\n    function foo4($arg='foo') {\n    }\n    function foo5($arg=1) {\n    }\n    function bar($arg) {\n    }\n    function foo() {\n    }\n}\necho new ReflectionClass('Test');\n?>")).toMatchSnapshot();
  });
});
