// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/clear_001.phpt
  it("Test clearing breakpoints", function () {
    expect(parser.parseCode("<?php\necho 1;\necho 2;\necho 3;\nfoo();\nfunction foo() {\n\techo 4;\n}\n")).toMatchSnapshot();
  });
});
