// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/init_fcall_002.phpt
  it("JIT INIT_FCALL: 002 incorrect megamorphic call detection", function () {
    expect(parser.parseCode("<?php\nclass C {\n\tfunction foo($x) {\n\t\treturn $x;\n\t}\n}\nfunction foo($x) {\n\treturn $x;\n}\nfunction test2($x) {\n\treturn foo(foo($x));\n}\nfunction test1() {\n\t$x = new C;\n\tfoo(foo($x->foo(foo(test2($x)))));\n}\ntest1();\n?>\nDONE")).toMatchSnapshot();
  });
});
