// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug70228_2.phpt
  it("Bug #70228 (memleak if return in finally block)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        throw new Exception(1);\n    } finally {\n        try {\n            throw new Exception(2);\n        } finally {\n            return 42;\n        }\n    }\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
