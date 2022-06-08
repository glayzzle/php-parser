// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_add-dates.phpt
  it("DateTime::add() -- dates", function () {
    expect(parser.parseCode("<?php\nrequire 'examine_diff.inc';\ndefine('PHPT_DATETIME_SHOW', PHPT_DATETIME_SHOW_ADD);\nrequire 'DateTime_data-dates.inc';\n?>")).toMatchSnapshot();
  });
});
