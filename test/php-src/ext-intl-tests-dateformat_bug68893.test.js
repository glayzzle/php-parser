// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_bug68893.phpt
  it("Bug #68893 Stackoverflow in datefmt_create", function () {
    expect(parser.parseCode("<?php\n$f = datefmt_create(\"en_us\", -10000000, 1);\nvar_dump($f, intl_get_error_message());\n$f = datefmt_create(\"en_us\", 1, -10000000);\nvar_dump($f, intl_get_error_message());\n?>")).toMatchSnapshot();
  });
});
