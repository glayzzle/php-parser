// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug53150.phpt
  it("Bug #53150 (FILTER_FLAG_NO_RES_RANGE is missing some IP ranges)", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var('127.0.0.1', FILTER_VALIDATE_IP));\nvar_dump(filter_var(\"::1\", FILTER_VALIDATE_IP));\nvar_dump(filter_var('127.0.0.1', FILTER_VALIDATE_IP, FILTER_FLAG_NO_RES_RANGE));\nvar_dump(filter_var('::1', FILTER_VALIDATE_IP, FILTER_FLAG_NO_RES_RANGE));\nvar_dump(filter_var('128.0.0.1', FILTER_VALIDATE_IP));\nvar_dump(filter_var('128.0.0.1', FILTER_VALIDATE_IP, FILTER_FLAG_NO_RES_RANGE));\nvar_dump(filter_var('191.255.0.0', FILTER_VALIDATE_IP));\nvar_dump(filter_var('191.255.0.0', FILTER_VALIDATE_IP, FILTER_FLAG_NO_RES_RANGE));\n?>")).toMatchSnapshot();
  });
});
