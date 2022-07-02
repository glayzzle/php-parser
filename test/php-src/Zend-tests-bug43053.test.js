// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43053.phpt
  it("Bug #43053 (Regression: some numbers shown in scientific notation)", function () {
    expect(parser.parseCode("<?php\necho 1200000.00.\"\\n\";\necho 1300000.00.\"\\n\";\necho 1400000.00.\"\\n\";\necho 1500000.00.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
