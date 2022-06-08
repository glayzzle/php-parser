// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug80974.phpt
  it("Bug #80974: Wrong diff between 2 dates in different timezones", function () {
    expect(parser.parseCode("<?php\n$dtToronto = new DateTime('2012-01-01 00:00:00.000000 America/Toronto');\n$dtVancouver = new DateTime('2012-01-01 00:00:00.000000 America/Vancouver');\necho $dtVancouver->diff($dtToronto)->format('%h');\n?>")).toMatchSnapshot();
  });
});
