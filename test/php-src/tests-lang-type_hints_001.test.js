// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/type_hints_001.phpt
  it("ZE2 type hinting", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n}\nclass Bar {\n}\nfunction type_hint_foo(Foo $a) {\n}\n$foo = new Foo;\n$bar = new Bar;\ntype_hint_foo($foo);\ntype_hint_foo($bar);\n?>")).toMatchSnapshot();
  });
});
