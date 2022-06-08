// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug51987.phpt
  it("Bug #51987 (Datetime fails to parse an ISO 8601 ordinal date (extended format))", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/London');\n$d2 = new Datetime('1985-102');\nvar_dump($d2);\n?>")).toMatchSnapshot();
  });
});
