// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug39846.phpt
  it("Bug #39846 (ipv4 trailing data validation)", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var('192.168.1.100random-text-here', FILTER_VALIDATE_IP));\nvar_dump(filter_var(\"192.168.1.155\\0foo\", FILTER_VALIDATE_IP));\n?>")).toMatchSnapshot();
  });
});
