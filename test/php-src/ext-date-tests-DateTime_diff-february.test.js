// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_diff-february.phpt
  it("DateTime::diff() -- february", function () {
    expect(parser.parseCode("<?php\nrequire 'examine_diff.inc';\ndefine('PHPT_DATETIME_SHOW', PHPT_DATETIME_SHOW_DIFF);\nrequire 'DateTime_data-february.inc';\n?>")).toMatchSnapshot();
  });
});
