// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/send_ref_001.phpt
  it("JIT SEND_REF: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo(&$obj) {\n}\nclass A {\n\tfunction foo() {\n\t\tfor ($i = 0; $i < 10; $i++) {\n\t\t\tfoo($this);\n\t\t}\n\t\techo \"ok\\n\";\n\t}\n}\n$a = new A;\n$a->foo();\n?>")).toMatchSnapshot();
  });
});
