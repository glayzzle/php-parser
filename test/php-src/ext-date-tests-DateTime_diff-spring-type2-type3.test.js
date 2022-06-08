// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_diff-spring-type2-type3.phpt
  it("DateTime::diff() -- spring type2 type3", function () {
    expect(parser.parseCode("<?php\nrequire 'examine_diff.inc';\ndefine('PHPT_DATETIME_SHOW', PHPT_DATETIME_SHOW_DIFF);\nrequire 'DateTime_data-spring-type2-type3.inc';\n?>")).toMatchSnapshot();
  });
});
