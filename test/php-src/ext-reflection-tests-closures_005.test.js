// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/closures_005.phpt
  it("Test closure isStatic", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static function bar(){}\n    public function baz() {}\n    \n    public function qux() {\n        return static function(){};\n    }\n}\n$foo = new Foo;\nvar_dump(\n    (new ReflectionFunction(function(){}))->isStatic(),\n    (new ReflectionFunction(static function(){}))->isStatic(),\n    (new ReflectionFunction($foo->qux()))->isStatic(),\n    (new ReflectionMethod($foo, 'bar'))->isStatic(),\n    (new ReflectionMethod($foo, 'baz'))->isStatic(),);\n?>")).toMatchSnapshot();
  });
});
