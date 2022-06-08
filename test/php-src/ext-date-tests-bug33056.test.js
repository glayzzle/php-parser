// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug33056.phpt
  it("Bug #33056 (strtotime() does not parse 20050518t090000Z)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\necho strtotime('20050518t090000Z').\"\\n\";\necho strtotime('20050518t091234Z').\"\\n\";\necho strtotime('20050518t191234Z').\"\\n\";\n?>")).toMatchSnapshot();
  });
});
