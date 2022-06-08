// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug67253.phpt
  it("Bug #67253 (timelib_meridian_with_check out-of-bounds read)", function () {
    expect(parser.parseCode("<?php\n$z = '';\nvar_dump(date_parse_from_format(\"aHa0\", \"0=G{$z}9UCNnF\"));\n?>")).toMatchSnapshot();
  });
});
