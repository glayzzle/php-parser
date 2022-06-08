// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter___construct.phpt
  it("IntlBreakIterator::__construct() should not be callable", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nnew IntlBreakIterator();\n?>")).toMatchSnapshot();
  });
});
