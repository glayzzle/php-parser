// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug77827.phpt
  it("Bug #77827 (preg_match does not ignore \\r in regex flags)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    preg_match(\"/foo/i\\r\", 'FOO'),\n    preg_last_error()\n);\n?>")).toMatchSnapshot();
  });
});
