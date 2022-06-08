// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug80584.phpt
  it("Bug #80584: \"0x\" and \"0X\" are considered valid hex numbers by filter_var()", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var('0x', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX));\nvar_dump(filter_var('0X', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX));\nvar_dump(filter_var('', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX));\nvar_dump(filter_var('0', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX));\n?>")).toMatchSnapshot();
  });
});
