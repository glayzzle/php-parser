// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_sub-massive.phpt
  it("DateTime::sub() -- massive", function () {
    expect(parser.parseCode("<?php\nrequire 'examine_diff.inc';\ndefine('PHPT_DATETIME_SHOW', PHPT_DATETIME_SHOW_SUB);\nrequire 'DateTime_data-massive.inc';\n?>")).toMatchSnapshot();
  });
});
