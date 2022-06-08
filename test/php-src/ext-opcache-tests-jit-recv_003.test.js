// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/recv_003.phpt
  it("JIT RECV: slow type check", function () {
    expect(parser.parseCode("<?php\nclass A {\n}\nclass B extends A {\n}\nclass C {\n}\nfunction test(A $x)\n{\n\techo \"ok\\n\";\n}\ntest(new B);\ntest(new C);\n?>")).toMatchSnapshot();
  });
});
