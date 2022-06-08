// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/uchar/tests/bug70455.phpt
  it("Bug #70455 Missing constant: IntlChar::NO_NUMERIC_VALUE", function () {
    expect(parser.parseCode("<?php\n$value = IntlChar::getNumericValue(\"x\");\nvar_dump($value);\nvar_dump($value === IntlChar::NO_NUMERIC_VALUE);\n?>")).toMatchSnapshot();
  });
});
