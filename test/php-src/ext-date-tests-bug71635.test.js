// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug71635.phpt
  it("Bug #71635 (segfault in DatePeriod::getEndDate() when no end date has been set)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$period = new DatePeriod(new DateTimeImmutable(\"now\"), new DateInterval(\"P2Y4DT6H8M\"), 2);\nvar_dump($period->getEndDate());\n?>")).toMatchSnapshot();
  });
});
