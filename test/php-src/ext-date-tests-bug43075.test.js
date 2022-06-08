// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug43075.phpt
  it("Bug #43075 (Support 24 as hour)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$d = date_create(\"2007-11-01T24:34:00+00:00\");\necho $d->format(\"c\");\n?>")).toMatchSnapshot();
  });
});
