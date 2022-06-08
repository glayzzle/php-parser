// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/ret_004.phpt
  it("JIT RET: 004 Return a reference when it's not expected", function () {
    expect(parser.parseCode("<?php\nclass A {\n\tfunction foo() {\n\t}\n\tfunction bar() {\n\t\t$x = $this->foo();\n\t\tvar_dump(str_repeat($x,5));\n\t}\n}\nclass B extends A {\n\tpublic $prop = \"x\";\n\tfunction &foo() {\n\t\treturn $this->prop;\n\t}\n}\n$b = new B;\n$b->bar();\n?>")).toMatchSnapshot();
  });
});
