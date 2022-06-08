// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug53512.phpt
  it("Bug #53512 (NumberFormatter::setSymbol crash on bogus $attr values)", function () {
    expect(parser.parseCode("<?php\n$badvals = array(4294901761, 2147483648, -2147483648, -1);\nforeach ($badvals as $val) {\n    $x = numfmt_create(\"en\", NumberFormatter::PATTERN_DECIMAL);\n    var_dump(numfmt_set_symbol($x, $val, \"\"));\n    var_dump(intl_get_error_message());\n}\n?>")).toMatchSnapshot();
  });
});
