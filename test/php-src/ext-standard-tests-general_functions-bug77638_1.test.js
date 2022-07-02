// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug77638_1.phpt
  it("Bug #77638 (var_export'ing certain class instances segfaults)", function () {
    expect(parser.parseCode("<?php\nvar_export(new COM(\"Scripting.Dictionary\"));\n?>")).toMatchSnapshot();
  });
});
