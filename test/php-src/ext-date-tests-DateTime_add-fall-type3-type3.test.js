// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_add-fall-type3-type3.phpt
  it("DateTime::add() -- fall type3 type3", function () {
    expect(parser.parseCode("<?php\nrequire 'examine_diff.inc';\ndefine('PHPT_DATETIME_SHOW', PHPT_DATETIME_SHOW_ADD);\nrequire 'DateTime_data-fall-type3-type3.inc';\n?>")).toMatchSnapshot();
  });
});
