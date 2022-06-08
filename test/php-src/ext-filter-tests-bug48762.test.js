// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug48762.phpt
  it("Bug #48762 (IPv6 address filter still rejects valid address)", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var('0b15:23::3:67.98.234.17', FILTER_VALIDATE_IP, FILTER_FLAG_IPV6));\nvar_dump(filter_var('::67:78b:34.43.43.2', FILTER_VALIDATE_IP, FILTER_FLAG_IPV6));\n?>")).toMatchSnapshot();
  });
});
