// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52454.phpt
  it("Bug #52454 (Relative dates and getTimestamp increments by one day)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/London');\n$endOfWeek = new DateTime('2010-07-27 09:46:49');\n$endOfWeek->modify('this week +6 days');\necho $endOfWeek->format('Y-m-d H:i:s').\"\\n\";\necho $endOfWeek->format('U').\"\\n\";\n/* Thar she blows! */\necho $endOfWeek->getTimestamp().\"\\n\";\necho $endOfWeek->format('Y-m-d H:i:s').\"\\n\";\n?>")).toMatchSnapshot();
  });
});
