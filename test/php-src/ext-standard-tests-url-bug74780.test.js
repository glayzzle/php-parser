// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug74780.phpt
  it("Bug #74780\tparse_url() borks when query string contains colon", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    parse_url('//php.net/path?query=1:2'),\n    parse_url('//php.net/path.php?query=a:b'),\n    parse_url('//username@php.net/path?query=1:2')\n);\n?>")).toMatchSnapshot();
  });
});
