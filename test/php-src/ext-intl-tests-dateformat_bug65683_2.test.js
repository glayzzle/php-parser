// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_bug65683_2.phpt
  it("Bug #65683: Intl does not support DateTimeImmutable (using datefmt_format_object)", function () {
    expect(parser.parseCode("<?php\n$date = date_create('1970-01-01');\n$date_imm = date_create_immutable('1970-01-01');\nvar_dump(datefmt_format_object($date, null, 'fr_FR'));\nvar_dump(datefmt_format_object($date_imm, null, 'fr_FR'));\n?>")).toMatchSnapshot();
  });
});
