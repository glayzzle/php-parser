// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug77638_2.phpt
  it("Bug #77638 (var_export'ing certain class instances segfaults)", function () {
    expect(parser.parseCode("<?php\nvar_export(FFI::new('int'));\n?>")).toMatchSnapshot();
  });
});
