// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/gh8461-007.phpt
  it("Bug GH-8461 007 (JIT does not account for function re-compile)", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i < 100; $i++) {\n    UniqueListLast::bar();\n}\nfor ($i = 0; $i < 100; $i++) {\n    new UniqueListLast();\n}\nfor ($i = 0; $i < 10; $i++) {\n    test();\n}\nprint \"OK\";")).toMatchSnapshot();
  });
});
