// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug64441.phpt
  it("bug 64441, FILTER_VALIDATE_URL will invalidate a hostname that ended by dot", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var('http://example.com./', FILTER_VALIDATE_URL));\nvar_dump(filter_var('http://example.com/', FILTER_VALIDATE_URL));\n?>")).toMatchSnapshot();
  });
});
