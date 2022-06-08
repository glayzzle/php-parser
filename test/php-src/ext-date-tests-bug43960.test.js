// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug43960.phpt
  it("Bug #43960 (strtotime() returns timestamp in the future when given a bogus string)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\nvar_dump(strtotime('i like to eat slices at work'));\n?>")).toMatchSnapshot();
  });
});
