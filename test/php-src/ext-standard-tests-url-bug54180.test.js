// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug54180.phpt
  it("Bug #54180 (parse_url() incorrectly parses path when ? in fragment)", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_url(\"http://example.com/path/script.html?t=1#fragment?data\"));\nvar_dump(parse_url(\"http://example.com/path/script.html#fragment?data\"));\n?>")).toMatchSnapshot();
  });
});
