// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jmpznz_relative_offsets.phpt
  it("Check for correct treatment of relative JMPZNZ offsets when copying opline", function () {
    expect(parser.parseCode("<?php\nfunction test($c) {\n    L1:\n    if ($c) {\n        goto L1;\n        goto L1;\n    }\n}\ntest(false);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
