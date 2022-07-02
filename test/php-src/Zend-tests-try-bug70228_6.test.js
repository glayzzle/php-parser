// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug70228_6.phpt
  it("Bug #70228 (memleak if return in finally block)", function () {
    expect(parser.parseCode("<?php\nfunction test($x) {\n    foreach ($x as $v) {\n        try {\n            return str_repeat(\"a\", 2);\n        } finally {\n            return 42;\n        }\n    }\n}\nvar_dump(test([1]));\n?>")).toMatchSnapshot();
  });
});
