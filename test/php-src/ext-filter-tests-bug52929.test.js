// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug52929.phpt
  it("Bug #52929 (Segfault in filter_var with FILTER_VALIDATE_EMAIL with large amount of data)", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var('valid@email.address', FILTER_VALIDATE_EMAIL));\n// Beyond the allowable limit for an e-mail address.\nvar_dump(filter_var('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy.zz', FILTER_VALIDATE_EMAIL));\n// An invalid address likely to crash PHP due to stack exhaustion if it goes to\n// the validation regex.\nvar_dump(filter_var(str_repeat('x', 8000), FILTER_VALIDATE_EMAIL));\n?>")).toMatchSnapshot();
  });
});
