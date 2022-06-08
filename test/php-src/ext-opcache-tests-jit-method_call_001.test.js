// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/method_call_001.phpt
  it("JIT METHOD_CALL: 001", function () {
    expect(parser.parseCode("<?php\nfunction &foo() {\n\treturn A::$o;\n}\nclass A {\n\tstatic $o = null;\n\tstatic function foo() {\n\t\treturn foo()->bar();\n\t}\n\tstatic function loop() {\n\t\tfor ($i = 0; $i < 10; $i++) {\n\t\t\tself::foo();\n\t\t}\n\t\techo \"ok\\n\";\n\t}\n}\nclass B {\n\tfunction bar() {\n\t}\n}\nA::$o = new B;\nA::loop();\n?>")).toMatchSnapshot();
  });
});
