// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52668.phpt
  it("Bug #52668 (Iterating over a dateperiod twice is broken)", function () {
    expect(parser.parseCode("<?php\n$start    = new DateTime('20101212');\n$interval = DateInterval::createFromDateString('next day');\n$dp = new DatePeriod($start, $interval, 1);\nforeach($dp as $dt) {\n    echo $dt->format('r') . \"\\n\"; // Sun, 12 Dec 2010 00:00:00 +0100\n}\necho $start->format('r'), \"\\n\";\nforeach($dp as $dt) {\n    echo $dt->format('r') . \"\\n\"; // Sun, 12 Dec 2010 00:00:00 +0100\n}\necho $start->format('r'), \"\\n\\n\";\n?>")).toMatchSnapshot();
  });
});
