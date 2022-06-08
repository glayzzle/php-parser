// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_static_prop_001.phpt
  it("JIT ASSIGN_STATIC_PROP: 001", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static $prop;\n}\nfunction test($x) {\n    $a = [$x];\n    Foo::$prop = $a;\n    $a = 42;\n}\ntest(42);\nvar_dump(Foo::$prop);\n?>")).toMatchSnapshot();
  });
});
