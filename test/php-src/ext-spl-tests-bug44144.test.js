// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug44144.phpt
  it("Bug #44144 (spl_autoload_functions() should return object instance when appropriate)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  public function nonstaticMethod() {}\n}\n$foo = new Foo;\nspl_autoload_register(array($foo, 'nonstaticMethod'));\n$funcs = spl_autoload_functions();\nvar_dump($funcs);\n?>")).toMatchSnapshot();
  });
});
