// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug45554.phpt
  it("Bug #45554 (Inconsistent behavior of the u format char)", function () {
    expect(parser.parseCode("<?php\n$format = \"m-d-Y H:i:s.u T\";\n$d = date_create_from_format($format, \"03-15-2005 12:22:29.000000 PST\");\necho $d->format($format), \"\\n\";\n$d = date_create_from_format($format, \"03-15-2005 12:22:29.001001 PST\");\necho $d->format($format), \"\\n\";\n$d = date_create_from_format($format, \"03-15-2005 12:22:29.0010 PST\");\necho $d->format($format), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
