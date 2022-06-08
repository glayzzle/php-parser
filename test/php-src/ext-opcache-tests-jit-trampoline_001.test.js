// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/trampoline_001.phpt
  it("JIT Trampoline 001: trampoline cleanup", function () {
    expect(parser.parseCode("<?php\nclass A {\n}\nclass B extends A {\n\tfunction foo() {\n\t\techo \"B\";\n\t}\n}\nclass C extends A {\n\tfunction __call($name, $argd) {\n\t\techo \"C\";\n\t}\n}\n$b = new B;\n$c = new C;\n$a = [$b, $b, $b, $c, $c, $c];\nforeach ($a as $x) {\n\t$x->foo();\n}\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
