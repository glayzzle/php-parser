// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug68636.phpt
  it("Bug #68636 (setlocale no longer returns current value per category).", function () {
    expect(parser.parseCode("<?php\nvar_dump(setlocale(LC_TIME, 'en_US.UTF8'));\nvar_dump(setlocale(LC_NUMERIC, 'C'));\nvar_dump(setlocale(LC_TIME, 0));\n?>")).toMatchSnapshot();
  });
});
