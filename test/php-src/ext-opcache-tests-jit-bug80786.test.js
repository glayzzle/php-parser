// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug80786.phpt
  it("Bug #80786: PHP crash using JIT", function () {
    expect(parser.parseCode("<?php\n$a = new Test();\n$a->TestFunc();\nvar_dump($a->value);\nclass Test{\n\tpublic $value = 11.3;\n\tpublic function TestFunc() {\n\t\t$this->value -= 10;\n\t}\n}\n?>")).toMatchSnapshot();
  });
});
