// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug80426.phpt
  it("Bug #80426: Crash when using JIT and an extension replacing zend_execute_ex with custom", function () {
    expect(parser.parseCode("<?php\nfunction compute() {\n    if (true) {\n    }\n}\nfor ($i = 0; $i <= 64; $i++) {\n    compute();\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
