// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug25145.phpt
  it("Bug #25145 (SEGV on receipt of form input with name like \"123[]\")", function () {
    expect(parser.parseCode("<?php\nvar_dump($_REQUEST);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
