// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug46973.phpt
  it("Bug #46973 (IPv6 address filter rejects valid address)", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var('1fff::a88:85a3::172.31.128.1', FILTER_VALIDATE_IP,FILTER_FLAG_IPV6));\nvar_dump(filter_var('3ffe:6a88:85a3:08d3:1319:8a2e:0370:7344', FILTER_VALIDATE_IP,FILTER_FLAG_IPV6));\nvar_dump(filter_var('1fff::a88:85a3::172.31.128.1', FILTER_VALIDATE_IP,FILTER_FLAG_IPV6));\n?>")).toMatchSnapshot();
  });
});
