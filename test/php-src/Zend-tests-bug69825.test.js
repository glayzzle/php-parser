// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69825.phpt
  it("Bug #69825 (Short-circuiting failure)", function () {
    expect(parser.parseCode("<?php\nprint \"AND\\n\";\nvar_dump(0 && 1);\nvar_dump(0 && 0);\nvar_dump(1 && 0);\nvar_dump(1 && 1);\nprint \"OR\\n\";\nvar_dump(0 || 1);\nvar_dump(0 || 0);\nvar_dump(1 || 0);\nvar_dump(1 || 1);\n?>")).toMatchSnapshot();
  });
});
