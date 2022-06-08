// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug70228.phpt
  it("Bug #70228 (memleak if return in finally block)", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    try { return str_repeat(\"a\", 2); }\n    finally { return str_repeat(\"b\", 2); }\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
