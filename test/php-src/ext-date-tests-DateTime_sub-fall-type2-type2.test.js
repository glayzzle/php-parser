// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_sub-fall-type2-type2.phpt
  it("DateTime::sub() -- fall type2 type2", function () {
    expect(parser.parseCode("<?php\nrequire 'examine_diff.inc';\ndefine('PHPT_DATETIME_SHOW', PHPT_DATETIME_SHOW_SUB);\nrequire 'DateTime_data-fall-type2-type2.inc';\n?>")).toMatchSnapshot();
  });
});
