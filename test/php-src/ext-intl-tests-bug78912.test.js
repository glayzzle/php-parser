// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug78912.phpt
  it("Request #78912 (INTL Support for accounting format)", function () {
    expect(parser.parseCode("<?php\n$nf = new NumberFormatter('en_US', NumberFormatter::CURRENCY_ACCOUNTING);\nvar_dump($nf->formatCurrency(-12345.67, 'USD'));\n?>")).toMatchSnapshot();
  });
});
