// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug74080.phpt
  it("Bug #74080 Provide an RFC7231 date time format", function () {
    expect(parser.parseCode("<?php\n$date = mktime(17, 52, 13, 4, 30, 2016);\nvar_dump(date(\\DateTime::RFC7231, $date));\n?>")).toMatchSnapshot();
  });
});
