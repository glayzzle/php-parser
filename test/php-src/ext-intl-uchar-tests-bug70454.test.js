// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/uchar/tests/bug70454.phpt
  it("Bug #70454 (IntlChar::forDigit second parameter should be optional)", function () {
    expect(parser.parseCode("<?php\nvar_dump(IntlChar::forDigit(0));\nvar_dump(IntlChar::forDigit(3));\nvar_dump(IntlChar::forDigit(3, 10));\nvar_dump(IntlChar::forDigit(10));\nvar_dump(IntlChar::forDigit(10, 16));\n?>")).toMatchSnapshot();
  });
});
