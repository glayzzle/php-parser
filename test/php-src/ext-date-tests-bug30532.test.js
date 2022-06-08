// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug30532.phpt
  it("Bug #30532 (strtotime - crossing daylight savings time)", function () {
    expect(parser.parseCode("<?php\necho date('Y-m-d H:i:s T', strtotime('2004-10-31 EDT +1 hour')).\"\\n\";\necho date('Y-m-d H:i:s T', strtotime('2004-10-31 EDT +2 hours')).\"\\n\";\necho date('Y-m-d H:i:s T', strtotime('2004-10-31 EDT +3 hours')).\"\\n\";\necho \"\\n\";\necho date('Y-m-d H:i:s T', strtotime('2004-10-31 +1 hour')).\"\\n\";\necho date('Y-m-d H:i:s T', strtotime('2004-10-31 +2 hours')).\"\\n\";\necho date('Y-m-d H:i:s T', strtotime('2004-10-31 +3 hours')).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
