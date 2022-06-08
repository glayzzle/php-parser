// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug81565.phpt
  it("Bug #81565 (date parsing fails when provided with timezones including seconds)", function () {
    expect(parser.parseCode("<?php\nvar_export(\n    \\DateTime::createFromFormat(\n        'Y-m-d H:i:sO',\n        '0021-08-21 00:00:00+00:49:56'\n    )\n);\necho \"\\n\", (new DatetimeZone('+01:45:30'))->getName();\n?>")).toMatchSnapshot();
  });
});
