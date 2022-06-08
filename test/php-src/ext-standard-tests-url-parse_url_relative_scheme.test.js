// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/parse_url_relative_scheme.phpt
  it("Test parse_url() function: Checks relative URL schemes (e.g. \"//example.com\")", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_url('//example.org'));\n?>")).toMatchSnapshot();
  });
});
