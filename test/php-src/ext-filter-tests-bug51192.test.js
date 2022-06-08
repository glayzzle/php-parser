// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug51192.phpt
  it("bug 51192, FILTER_VALIDATE_URL will invalidate a hostname that includes '-'", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var('http://example.com/path', FILTER_VALIDATE_URL));\nvar_dump(filter_var('http://exa-mple.com/path', FILTER_VALIDATE_URL));\nvar_dump(filter_var('http://exa_mple.com/path', FILTER_VALIDATE_URL));\n?>")).toMatchSnapshot();
  });
});
