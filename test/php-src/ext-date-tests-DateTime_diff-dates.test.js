// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_diff-dates.phpt
  it("DateTime::diff() -- dates", function () {
    expect(parser.parseCode("<?php\nrequire 'examine_diff.inc';\ndefine('PHPT_DATETIME_SHOW', PHPT_DATETIME_SHOW_DIFF);\nrequire 'DateTime_data-dates.inc';\n?>")).toMatchSnapshot();
  });
});
