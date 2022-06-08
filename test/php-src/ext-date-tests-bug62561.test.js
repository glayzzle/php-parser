// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug62561.phpt
  it("Bug #62561 Unixtimestamp may take on local times DST flag (this test will only be valid during EDT)", function () {
    expect(parser.parseCode("<?php\n$tz = new DateTimeZone('America/New_York');\n$ts = new DateTime('@1341115200', $tz);\n$int = new DateInterval('P1D');\n$dayFromTs = new DateTime('@1341115200', new DateTimeZone('America/New_York'));\n$dayFromTs->add($int);\necho 'ts: '.$ts->format('Y-m-d H:i:s').\"\\n\";\necho 'day from ts: '.$dayFromTs->format('Y-m-d H:i:s').\"\\n\";\n?>")).toMatchSnapshot();
  });
});
