// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug73192.phpt
  it("Bug #73192: parse_url return wrong hostname", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_url(\"http://example.com:80#@google.com/\"));\nvar_dump(parse_url(\"http://example.com:80?@google.com/\"));\n?>")).toMatchSnapshot();
  });
});
