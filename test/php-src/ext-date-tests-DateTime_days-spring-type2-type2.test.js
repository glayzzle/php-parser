// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_days-spring-type2-type2.phpt
  it("DateTime::diff() days -- spring type2 type2", function () {
    expect(parser.parseCode("<?php\nrequire 'examine_diff.inc';\ndefine('PHPT_DATETIME_SHOW', PHPT_DATETIME_SHOW_DAYS);\nrequire 'DateTime_data-spring-type2-type2.inc';\n?>")).toMatchSnapshot();
  });
});
