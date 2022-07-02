// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug63162.phpt
  it("Test parse_url() for bug #63162", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_url('http://user:pass@host'));\nvar_dump(parse_url('//user:pass@host'));\nvar_dump(parse_url('//user@host'));\n?>")).toMatchSnapshot();
  });
});
