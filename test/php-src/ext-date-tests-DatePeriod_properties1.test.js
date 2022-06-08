// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DatePeriod_properties1.phpt
  it("DatePeriod: Test read only properties", function () {
    expect(parser.parseCode("<?php\n$start = new DateTime;\n$interval = new DateInterval('P1D');\n$end = new DateTime;\n$period = new DatePeriod($start, $interval, $end);\necho \"recurrences: \";\nvar_dump($period->recurrences);\necho \"include_start_date: \";\nvar_dump($period->include_start_date);\necho \"start: \";\nvar_dump($period->start == $start);\necho \"current: \";\nvar_dump($period->current);\necho \"end: \";\nvar_dump($period->end == $end);\necho \"interval: \";\nvar_dump($period->interval->format(\"%R%d\"));\n?>")).toMatchSnapshot();
  });
});
