// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug61700.phpt
  it("Bug #61700 (FILTER_FLAG_IPV6/FILTER_FLAG_NO_PRIV|RES_RANGE failing)", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var('::ffff:192.168.1.1', FILTER_VALIDATE_IP, FILTER_FLAG_IPV4));\nvar_dump(filter_var('::ffff:192.168.1.1', FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE));\nvar_dump(filter_var('0:0:0:0:0:0:0:1', FILTER_VALIDATE_IP, FILTER_FLAG_NO_RES_RANGE));\n?>")).toMatchSnapshot();
  });
});
